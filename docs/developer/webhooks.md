---
sidebar_position: 4
title: Webhooks
---

# Webhooks Guide

Webhooks allow you to receive real-time notifications when specific events occur in our system. This guide explains how to set up and use webhooks effectively.

<!-- ![Webhooks Diagram](/img/docs/webhooks-diagram.png) -->

## What Are Webhooks?

Webhooks are HTTP callbacks that notify your application when events happen in our system. For example, when a new property is listed, a showing is scheduled, or a user updates their profile, we can send a notification to your application.

## Setting Up Webhooks

### Step 1: Create an Endpoint

First, create an endpoint on your server to receive webhook notifications. This endpoint should:

- Be publicly accessible
- Accept POST requests
- Process the request body as JSON
- Respond with a 2xx status code quickly (under 5 seconds)

Example endpoint implementation in Node.js/Express:

```javascript
const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

app.post('/webhooks/real-estate', (req, res) => {
  const event = req.body;
  
  // Process the event
  console.log('Received webhook event:', event.type);
  
  // Process different event types
  switch (event.type) {
    case 'property.created':
      handleNewProperty(event.data);
      break;
    case 'appointment.scheduled':
      handleNewAppointment(event.data);
      break;
    // Handle other event types...
  }
  
  // Respond quickly to acknowledge receipt
  res.status(200).send({ received: true });
  
  // Process the event asynchronously
  processEventAsync(event).catch(console.error);
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```

### Step 2: Register Your Webhook

Register your webhook endpoint in your account dashboard:

1. Navigate to the Developer Settings in your dashboard
2. Go to the Webhooks section
3. Click "Add Endpoint"
4. Enter your endpoint URL (e.g., `https://your-app.com/webhooks/real-estate`)
5. Select the events you want to subscribe to
6. Save your endpoint configuration

<!-- ![Webhook Configuration](/img/docs/webhook-config.png) -->

### Step 3: Verify Webhook Signatures

To ensure webhook requests come from our system and haven't been tampered with, we sign each request with a secret key. Verify this signature in your webhook handler:

```javascript
const crypto = require('crypto');

// Middleware to verify webhook signatures
function verifyWebhookSignature(req, res, next) {
  const signature = req.headers['x-webhook-signature'];
  const timestamp = req.headers['x-webhook-timestamp'];
  const body = JSON.stringify(req.body);
  
  // Your webhook secret from the dashboard
  const secret = process.env.WEBHOOK_SECRET;
  
  // Create the signature
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(timestamp + body)
    .digest('hex');
  
  // Check if signatures match
  if (crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  )) {
    next();
  } else {
    res.status(401).send('Invalid signature');
  }
}

// Use the middleware
app.post('/webhooks/real-estate', verifyWebhookSignature, (req, res) => {
  // Process webhook...
});
```

## Webhook Events

We support the following webhook events:

| Event Type | Description | Payload Example |
|------------|-------------|-----------------|
| `property.created` | A new property is listed | [View Example](#property-created) |
| `property.updated` | Property details are updated | [View Example](#property-updated) |
| `property.sold` | Property is marked as sold | [View Example](#property-sold) |
| `appointment.scheduled` | New showing appointment created | [View Example](#appointment-scheduled) |
| `appointment.updated` | Appointment details changed | [View Example](#appointment-updated) |
| `appointment.cancelled` | Appointment cancelled | [View Example](#appointment-cancelled) |
| `user.registered` | New user registration | [View Example](#user-registered) |
| `feedback.submitted` | Showing feedback submitted | [View Example](#feedback-submitted) |

### Event Payload Examples

#### property.created

```json
{
  "id": "evt_123456",
  "type": "property.created",
  "created": "2023-06-15T10:30:00Z",
  "data": {
    "property": {
      "id": "prop_123456",
      "address": "123 Main St, New York, NY 10001",
      "price": 750000,
      "bedrooms": 2,
      "bathrooms": 2,
      "squareFeet": 1200,
      "createdAt": "2023-06-15T10:30:00Z"
    }
  }
}
```

#### appointment.scheduled

```json
{
  "id": "evt_789012",
  "type": "appointment.scheduled",
  "created": "2023-06-15T14:20:00Z",
  "data": {
    "appointment": {
      "id": "appt_123456",
      "propertyId": "prop_123456",
      "startTime": "2023-06-20T10:30:00Z",
      "endTime": "2023-06-20T11:00:00Z",
      "status": "scheduled",
      "attendees": [
        {
          "id": "user_123",
          "name": "John Doe",
          "email": "john@example.com"
        }
      ],
      "createdAt": "2023-06-15T14:20:00Z"
    }
  }
}
```

## Best Practices

### Handle Duplicate Events

Occasionally, you may receive the same webhook event multiple times. Implement idempotent event handlers to ensure duplicate events don't cause issues:

```javascript
async function handleNewAppointment(appointmentData) {
  // Check if we've already processed this appointment
  const exists = await db.appointments.findOne({ id: appointmentData.id });
  
  if (exists) {
    console.log(`Already processed appointment ${appointmentData.id}`);
    return;
  }
  
  // Process the new appointment
  await db.appointments.insert({
    id: appointmentData.id,
    // Other appointment data...
    processed: true
  });
  
  // Additional processing...
}
```

### Implement Retry Logic

If your webhook endpoint is temporarily unavailable, we'll retry delivery with exponential backoff:

- First retry: 5 minutes after initial attempt
- Second retry: 30 minutes after first retry
- Third retry: 2 hours after second retry
- Fourth retry: 5 hours after third retry
- Fifth retry: 10 hours after fourth retry

After all retry attempts fail, the event will be considered failed, and you'll need to use the API to fetch missed events.

### Monitor Webhook Failures

Monitor webhook deliveries in your dashboard to identify any delivery issues:

1. Go to the Developer Settings in your dashboard
2. Navigate to the Webhooks section
3. Click on "Delivery History"
4. Review any failed deliveries and their error messages

## Testing Webhooks

You can test your webhook integration in two ways:

### Test from Dashboard

1. Go to the Developer Settings in your dashboard
2. Navigate to the Webhooks section
3. Select an endpoint
4. Click "Send Test Event"
5. Choose an event type and customize payload if needed
6. Send the test event

### Local Development

For local development, use a service like [ngrok](https://ngrok.com/) to expose your local server to the internet:

1. Install ngrok: `npm install -g ngrok`
2. Start your local webhook server
3. Run: `ngrok http 3000`
4. Copy the ngrok HTTPS URL (e.g., `https://a1b2c3d4.ngrok.io`)
5. Register this URL as a webhook endpoint in your dashboard

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Events not received | Check your server logs, firewall settings, and webhook endpoint registration |
| Signature verification fails | Ensure you're using the correct webhook secret and proper verification code |
| Slow response times | Optimize your webhook handler to respond quickly and process events asynchronously |
| Duplicate events | Implement idempotent event handlers as described in Best Practices |

## Support

If you encounter any issues with webhooks:

1. Check the [Webhook Delivery History](https://example.com/dashboard/webhooks/history) in your dashboard
2. Review our [API Status Page](https://status.example.com) for any system issues
3. Contact [developer support](mailto:dev-support@example.com) with your webhook endpoint ID and specific error details 