---
sidebar_position: 2
title: Authentication with Clerk
---

# Authentication with Clerk

This guide explains how to implement authentication in your application using Clerk.

<!-- ![Clerk Dashboard](/img/docs/clerk-dashboard.png) -->

## Overview

Clerk provides a complete authentication and user management solution that's easy to implement and customize. Our platform uses Clerk for secure authentication with features like:

- Social logins (Google, GitHub, etc.)
- Email/password authentication
- Multi-factor authentication (MFA)
- JWT-based sessions
- User profile management

## Setup Clerk

### Step 1: Create a Clerk account

1. Sign up at [clerk.com](https://clerk.com)
2. Create a new application in the Clerk dashboard
3. Configure your authentication methods (social providers, email/password, etc.)

### Step 2: Get your API keys

From your Clerk dashboard, obtain your API keys:

- **Publishable Key**: Used on the client-side
- **Secret Key**: Used on the server-side (keep this private)

<!-- ![Clerk API Keys](/img/docs/clerk-api-keys.png) -->

### Step 3: Set up environment variables

Create or update your `.env` file with your Clerk keys:

```
REACT_APP_CLERK_PUBLISHABLE_KEY=pk_test_********
CLERK_SECRET_KEY=sk_test_********
```

## Client-Side Implementation

### React Implementation

First, install the Clerk React package:

```bash
npm install @clerk/clerk-react
```

Then wrap your application with the `ClerkProvider`:

```jsx
import { ClerkProvider } from '@clerk/clerk-react';

const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {/* Your app components */}
    </ClerkProvider>
  );
}
```

### Add Sign In and Sign Up Components

Clerk provides pre-built components for authentication:

```jsx
import { SignIn, SignUp } from '@clerk/clerk-react';

// Sign In Page
function SignInPage() {
  return <SignIn />;
}

// Sign Up Page
function SignUpPage() {
  return <SignUp />;
}
```

### Protect Routes

Use the `SignedIn` and `SignedOut` components to conditionally render content:

```jsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function ProtectedPage() {
  return (
    <>
      <SignedIn>
        <ProtectedContent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
```

## Server-Side Implementation

### Node.js/Express Implementation

Install the Clerk SDK for Node.js:

```bash
npm install @clerk/clerk-sdk-node
```

Create middleware to verify sessions:

```javascript
const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// Protect API routes
app.get('/api/protected-route', 
  ClerkExpressRequireAuth(),
  (req, res) => {
    // Access the authenticated user
    const userId = req.auth.userId;
    res.json({ message: 'This is protected data', userId });
  }
);
```

## Using Clerk with Docusaurus

For Docusaurus sites, you can integrate Clerk to protect documentation:

1. Create a custom plugin for Clerk integration
2. Wrap your theme in a `ClerkProvider`
3. Add protected routes for sensitive content

Example implementation:

```jsx
// src/plugins/clerk-auth-plugin/index.ts
import type { Plugin } from '@docusaurus/types';

export default function clerkAuthPlugin(): Plugin {
  return {
    name: 'clerk-auth-plugin',
    async contentLoaded({ actions }) {
      const { setGlobalData } = actions;
      setGlobalData({ clerkEnabled: true });
    },
  };
}
```

```jsx
// src/theme/Root.tsx
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';

export default function Root({ children }) {
  const publishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
  
  return (
    <ClerkProvider publishableKey={publishableKey}>
      {children}
    </ClerkProvider>
  );
}
```

## Handling User Data

### Getting User Information

Clerk provides hooks to access user data:

```jsx
import { useUser } from '@clerk/clerk-react';

function UserProfile() {
  const { user } = useUser();
  
  if (!user) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>Welcome, {user.firstName}!</h1>
      <img src={user.profileImageUrl} alt={`${user.firstName}'s profile`} />
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
}
```

### Customizing the User Interface

You can customize Clerk's appearance to match your app:

<!-- ![Clerk Customization](/img/docs/clerk-customization.png) -->

## Additional Features

### Multi-Factor Authentication

Enable MFA for enhanced security:

```jsx
<SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" secondFactor="optional" />
```

### Webhooks

Configure webhooks to respond to authentication events:

1. Go to the Webhooks section in your Clerk dashboard
2. Add a new endpoint (e.g., `https://your-api.com/webhooks/clerk`)
3. Select the events to monitor (user created, session created, etc.)

### JWT Templates

Customize JWT claims for your application needs:

1. Navigate to JWT Templates in your Clerk dashboard
2. Create custom claims with user metadata
3. Use the JWT in your API authorization

## Troubleshooting

Common issues and solutions:

| Issue | Solution |
|-------|----------|
| "Invalid API key" error | Double-check your environment variables |
| Session not persisting | Verify your cookie settings and domains |
| CORS errors | Add your domains to the allowed list in Clerk dashboard |

For more assistance, contact [Clerk Support](https://clerk.com/support) or visit their [documentation](https://clerk.com/docs).

## Next Steps

- [Explore the API Reference](/docs/developer/api-reference)
- [Set up Webhooks](/docs/developer/webhooks)
- [Learn about User Management](/docs/developer/user-management)

