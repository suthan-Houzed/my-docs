import { ClerkProvider } from "@clerk/clerk-react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function AppClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const {siteConfig} = useDocusaurusContext();
  return (
    <ClerkProvider publishableKey={siteConfig.customFields.publishableKey as string}>
      {children}
    </ClerkProvider>
  );
} 