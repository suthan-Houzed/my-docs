import { SignUp } from "@clerk/clerk-react";

import AppClerkProvider from "./ClerkProvider";
import Layout from "@theme/Layout";

export default function SignUpPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <SignUp
          routing="path"
          path="/sign-up"
          signInUrl="/sign-in"
        />
      </div>
    </Layout>
  );
}
