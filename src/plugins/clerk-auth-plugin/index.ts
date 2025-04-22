import type { LoadContext, Plugin } from "@docusaurus/types";

export default function clerkAuthPlugin(
  context: LoadContext,
  options: any
): Plugin<void> {
  return {
    name: "clerk-auth-plugin",
    async contentLoaded({ actions }) {
      const { addRoute } = actions;

      // Route for /sign-in/*
      addRoute({
        path: "/sign-in/*",
        component: "@site/src/components/SignIn.tsx",
        exact: false,
      });

      // Route for /sign-up/*
      addRoute({
        path: "/sign-up/*",
        component: "@site/src/components/SignUp.tsx",
        exact: false,
      });
    },
  };
}
