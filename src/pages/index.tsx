import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import LandingPage from "../components/LandingPage";
import HomepageFeatures from "../components/HomepageFeatures";
import WhyChooseUs from "../components/WhyChooseUs";
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Documentation site with comprehensive guides, API references, and developer tools"
    >
    
      <LandingPage /> 
      <WhyChooseUs/>
      <HomepageFeatures />
    </Layout>
  );
}
