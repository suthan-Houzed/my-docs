import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Redirect } from '@docusaurus/router';

const CustomDocLayout = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // Redirect to the sign-in page if the user is not authenticated
    return <Redirect to="/sign-in" />;
  }

  // Allow access to the docs page if authenticated
  return <>{children}</>;
};

export default CustomDocLayout;
