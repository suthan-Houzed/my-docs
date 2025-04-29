---
sidebar_position: 3
title: API Reference
---

# API Reference

This document provides a comprehensive reference for all available API endpoints.

## Base URL

All API endpoints are relative to the base URL:

```
https://api.example.com/v1
```

## Authentication

All API requests require authentication using one of the following methods:

1. **Bearer Token** - Include in the Authorization header:
   ```
   Authorization: Bearer YOUR_API_TOKEN
   ```

2. **API Key** - Include as a query parameter:
   ```
   ?api_key=YOUR_API_KEY
   ```

## Common Parameters

These parameters can be used with most endpoints:

| Parameter | Type | Description |
|-----------|------|-------------|
| `limit` | integer | Number of results to return (default: 20, max: 100) |
| `offset` | integer | Offset for pagination (default: 0) |
| `sort` | string | Field to sort by (e.g., `createdAt`) |
| `order` | string | Sort order (`asc` or `desc`) |

## Property Endpoints

### List Properties

Retrieve a list of properties with optional filtering.

```
GET /properties
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `location` | string | City, state, or ZIP code |
| `minPrice` | number | Minimum price |
| `maxPrice` | number | Maximum price |
| `bedrooms` | integer | Minimum number of bedrooms |
| `bathrooms` | integer | Minimum number of bathrooms |

**Example Request:**

```bash
curl -X GET "https://api.example.com/v1/properties?location=New%20York&minPrice=500000&bedrooms=2" \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

**Example Response:**

```json
{
  "data": [
    {
      "id": "prop_123456",
      "address": "123 Main St, New York, NY 10001",
      "price": 750000,
      "bedrooms": 2,
      "bathrooms": 2,
      "squareFeet": 1200,
      "createdAt": "2023-05-15T10:30:00Z",
      "updatedAt": "2023-05-15T10:30:00Z"
    },
    {
      "id": "prop_789012",
      "address": "456 Park Ave, New York, NY 10022",
      "price": 950000,
      "bedrooms": 3,
      "bathrooms": 2.5,
      "squareFeet": 1500,
      "createdAt": "2023-05-14T14:20:00Z",
      "updatedAt": "2023-05-14T14:20:00Z"
    }
  ],
  "meta": {
    "total": 245,
    "limit": 20,
    "offset": 0
  }
}
```

### Get Property

Retrieve details for a specific property.

```
GET /properties/{id}
```

**Path Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | string | Unique property identifier |

**Example Request:**

```bash
curl -X GET "https://api.example.com/v1/properties/prop_123456" \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

**Example Response:**

```json
{
  "id": "prop_123456",
  "address": "123 Main St, New York, NY 10001",
  "description": "Beautiful 2-bedroom apartment in downtown Manhattan with stunning views.",
  "price": 750000,
  "bedrooms": 2,
  "bathrooms": 2,
  "squareFeet": 1200,
  "features": ["Elevator", "Doorman", "Gym", "Roof Deck"],
  "images": [
    {
      "id": "img_001",
      "url": "https://example.com/images/prop_123456_1.jpg",
      "caption": "Living Room"
    },
    {
      "id": "img_002",
      "url": "https://example.com/images/prop_123456_2.jpg",
      "caption": "Kitchen"
    }
  ],
  "location": {
    "latitude": 40.7128,
    "longitude": -74.0060
  },
  "createdAt": "2023-05-15T10:30:00Z",
  "updatedAt": "2023-05-15T10:30:00Z"
}
```

## Appointment Endpoints

### List Appointments

Retrieve a list of property viewing appointments.

```
GET /appointments
```

**Query Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `propertyId` | string | Filter by property ID |
| `date` | string | Filter by date (YYYY-MM-DD) |
| `status` | string | Filter by status (scheduled, completed, cancelled) |

**Example Request:**

```bash
curl -X GET "https://api.example.com/v1/appointments?date=2023-06-15" \
  -H "Authorization: Bearer YOUR_API_TOKEN"
```

**Example Response:**

```json
{
  "data": [
    {
      "id": "appt_123456",
      "propertyId": "prop_123456",
      "startTime": "2023-06-15T10:30:00Z",
      "endTime": "2023-06-15T11:00:00Z",
      "status": "scheduled",
      "attendees": [
        {
          "id": "user_123",
          "name": "John Doe",
          "email": "john@example.com"
        }
      ],
      "createdAt": "2023-06-10T14:20:00Z",
      "updatedAt": "2023-06-10T14:20:00Z"
    }
  ],
  "meta": {
    "total": 5,
    "limit": 20,
    "offset": 0
  }
}
```

### Create Appointment

Schedule a new property viewing appointment.

```
POST /appointments
```

**Request Body:**

```json
{
  "propertyId": "prop_123456",
  "startTime": "2023-06-15T10:30:00Z",
  "endTime": "2023-06-15T11:00:00Z",
  "attendees": [
    {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890"
    }
  ],
  "notes": "Interested in exploring financing options."
}
```

**Example Response:**

```json
{
  "id": "appt_123456",
  "propertyId": "prop_123456",
  "startTime": "2023-06-15T10:30:00Z",
  "endTime": "2023-06-15T11:00:00Z",
  "status": "scheduled",
  "attendees": [
    {
      "id": "user_123",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890"
    }
  ],
  "notes": "Interested in exploring financing options.",
  "createdAt": "2023-06-10T14:20:00Z",
  "updatedAt": "2023-06-10T14:20:00Z"
}
```

## Error Responses

The API uses conventional HTTP response codes to indicate success or failure:

| Code | Description |
|------|-------------|
| 200 | OK - Request succeeded |
| 400 | Bad Request - Invalid parameters |
| 401 | Unauthorized - Authentication failed |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 429 | Too Many Requests - Rate limit exceeded |
| 500 | Server Error - Something went wrong on our end |

**Example Error Response:**

```json
{
  "error": {
    "code": "invalid_request",
    "message": "The property ID specified does not exist.",
    "status": 404
  }
}
```

## Rate Limiting

API requests are limited to 100 requests per minute per API token. Rate limit information is included in response headers:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1623427800
```

## Webhooks

You can set up webhooks to receive real-time notifications about events. For more information, see the [Webhooks Guide](/docs/developer/webhooks).

## SDKs

We provide official SDKs for several programming languages:

- [JavaScript/TypeScript](https://github.com/example/js-sdk)
- [Python](https://github.com/example/python-sdk)
- [Ruby](https://github.com/example/ruby-sdk)
- [PHP](https://github.com/example/php-sdk)
- [Java](https://github.com/example/java-sdk)

## Support

If you encounter any issues or have questions about the API, please contact [developer support](mailto:api-support@example.com). 