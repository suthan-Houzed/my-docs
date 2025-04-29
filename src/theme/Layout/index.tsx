import React from "react";
import OriginalLayout from "@theme-original/Layout";
import { ClerkProvider, RedirectToSignIn, useAuth } from "@clerk/clerk-react";
import { useLocation, Redirect } from "@docusaurus/router";
import AppClerkProvider from "@site/src/components/ClerkProvider";
import SignIn from "@site/src/pages/sign-in";
import SignInPage from "@site/src/components/SignIn";

// const clerkKey = process.env.CLERK_PUBLISHABLE_KEY || "your-clerk-frontend-api";

function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  const publicRoutes = ["/sign-in", "/sign-up", "/"]

  const isPublic = publicRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  if (!isLoaded) return null;

  if (!isSignedIn && !isPublic) {
    console.log('location.pathname', location.pathname);
    // return <RedirectToSignIn redirectUrl={location.pathname} />;
    return <Redirect to="/sign-in" />;
  }

  return <>{children}</>;
}

// Import Tailwind CSS styles
import "@site/src/css/custom.css";

// Add Tailwind classes to the layout wrapper
export default function Layout(props) {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <AppClerkProvider>
        <ProtectedLayout>
          <OriginalLayout {...props} />
        </ProtectedLayout>
      </AppClerkProvider>
    </div>
  );
}