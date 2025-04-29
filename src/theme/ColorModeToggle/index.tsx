import React from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";
import {useColorMode} from '@docusaurus/theme-common'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';

import Link from "@docusaurus/Link";
import { useUser, UserButton } from "@clerk/clerk-react";

export default function ColorModeToggleWrapper(props) {
  const { isSignedIn } = useUser();
  const {colorMode} = useColorMode(); 
  const {shown} = useNavbarMobileSidebar(); 

  return (
    <>
      {isSignedIn ? (
        <div style={{ marginRight: 15 , marginTop: 7 }}>
          <UserButton afterSignOutUrl="/" />
        </div>
      ) : 
        (
          // Only show Sign In when navbar is not collapsed
          !shown && (
            <Link
              to="/sign-in"
              style={{
                cursor: "pointer",
                color: colorMode === 'dark' ? "white" : "#222222",
                textDecoration: "none",
                fontWeight: 500,
                marginRight: 15,
              }}
            >
              Sign In
            </Link>
          )
        
      )}

      <ColorModeToggle {...props} />
    </>
  );
}
