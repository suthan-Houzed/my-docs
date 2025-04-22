import { SignIn } from "@clerk/clerk-react";
import AppClerkProvider from "./ClerkProvider";

export default function SignInPage() {
  return (
    <AppClerkProvider>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <SignIn
          routing="path"
          path="/sign-in"
          signUpUrl="/sign-up"
          afterSignInUrl="/"
        />
      </div>
    </AppClerkProvider>
  );
}
