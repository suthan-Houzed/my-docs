import { SignUp } from "@clerk/clerk-react";

import AppClerkProvider from "./ClerkProvider";

export default function SignUpPage() {
  return (
    <AppClerkProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
          afterSignUpUrl="/"
        />
      </div>
    </AppClerkProvider>
  );
}
