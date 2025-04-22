import React from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
import Link from "@docusaurus/Link";
import { useUser, UserButton } from "@clerk/clerk-react";

export default function ColorModeToggleWrapper(props) {
  const { isSignedIn } = useUser();

  return (
    <>
      {isSignedIn ? (
        <div style={{ marginRight: 15 }}>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : (
        <Link
          to="/sign-in"
          style={{
            marginRight: 15,
            cursor: "pointer",
            color: "#222222",
            textDecoration: "none",
          }}
        >
          Sign In
        </Link>
      )}

      <ColorModeToggle {...props} />
    </>
  );
}
