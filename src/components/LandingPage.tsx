import React from 'react';
import Link from '@docusaurus/Link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex md:flex-col p-8 justify-evenly items-center">
      {/* Left side: Text */}
      <div className="flex items-center justify-center bg-gray-100 w-full md:w-1/2 p-4">
        <div className="max-w-md text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to Houzed Docs</h1>
          <p className="text-lg mb-8 text-gray-600">
            Discover our API and SDKs to build your own Houzed apps.
          </p>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-4">
        <img
          src="img/house-searching.svg"
          alt="Landing"
          className="w-3/4 h-auto object-cover"
        />
      </div>
    </div>
  );
}
