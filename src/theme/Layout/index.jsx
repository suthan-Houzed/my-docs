import React from 'react';
import Layout from '@theme-original/Layout';
import AppClerkProvider from '@site/src/components/ClerkProvider';

export default function LayoutWrapper(props) {
  return (
    <AppClerkProvider>
      <Layout {...props} />
    </AppClerkProvider>
  );
}
