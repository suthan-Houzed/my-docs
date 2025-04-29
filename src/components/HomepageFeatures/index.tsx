import React from 'react';

export default function HomepageFeatures(): React.ReactNode {
  return (
    <section className="container grid grid-cols-1 margin-top--xl content-evenly gap-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text--2xl margin-bottom--lg">Powerful Features</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our platform provides everything you need to streamline your real estate experience.
        </p>
      </div>
      <div className="container margin-top--xl">
        {/* Feature 1 */}
        <div className="grid grid-cols-2 gap-12 margin-bottom--xl">
          <div className="place-self-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Search Properties</h3>
            <p className="text-gray-600">
              Powerful search functionality with filters for location, price, features, and more.
              Find the perfect property with our intelligent search engine.
            </p>
          </div>
          <div className="justify-self-end place-self-start w-2/3 h-2/3">
            <img src="/img/best-place.svg" alt="Search" className=" object-contain" />
          </div>
        </div>

        {/* Feature 2 */}
        <div className="grid grid-cols-2 gap-12 items-center margin-bottom--xl">
          <div className="place-self-start w-2/3 h-2/3">
            <img src="/img/booked.svg" alt="Calendar" className="object-contain" />
          </div>
          <div className="place-self-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Plan Your Schedule</h3>
            <p className="text-gray-600">
              Organize property viewings with our integrated calendar. Auto-scheduling and
              reminders keep you on track for all your property appointments.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-2 gap-12 margin-bottom--xl">
          <div className="place-self-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Property Showings</h3>
            <p className="text-gray-600">
              Streamline your property showings with geo-fencing technology, automated feedback
              collection, and performance analytics for agents.
            </p>
          </div>
          <div className="justify-self-end place-self-start w-2/3 h-2/3">
            <img src="/img/small-town.svg" alt="Showings" className="object-contain" />
          </div>
        </div>

        {/* Feature 4 */}
        <div className="grid grid-cols-2 gap-12 margin-bottom--xl">
          <div className="place-self-start w-2/3 h-2/3">
            <img src="/img/server-API.svg" alt="API" className="object-contain" />
          </div>
          <div className="place-self-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Developer API</h3>
            <p className="text-gray-600">
              Full-featured REST API with documentation to integrate our services into your own
              apps and workflows.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div className="grid grid-cols-2 gap-12 items-center margin-bottom--xl">
          <div className="place-self-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Secure Authentication</h3>
            <p className="text-gray-600">
              Enterprise-grade security with Clerk authentication. Multi-factor authentication,
              social logins, and user management made simple.
            </p>
          </div>
          <div className="justify-self-end place-self-start w-2/3 h-2/3">
            <img src="/img/secure-login.svg" alt="Clerk" className="object-contain" />
          </div>
        </div>

        {/* Feature 6 */}
        <div className="grid grid-cols-2 gap-12 items-center margin-bottom--xl">
          <div className="place-self-start w-2/3 h-2/3">
            <img src="/img/dashboard.svg" alt="Analytics" className="object-contain" />
          </div>
          <div className="place-self-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
            <p className="text-gray-600">
              Gain insights with our analytics tools. Track performance, monitor market trends,
              and optimize your property business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
