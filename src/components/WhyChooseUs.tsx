export default function WhyChooseUs() {
  return (
    <div className="min-h-screen container grid grid-cols-1 content-evenly gap-10">

      <div className="mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Why Choose Houzed AI
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At Houzed AI, we don’t just help you find a home — we find <em>your</em> home.
          Our AI understands your needs and preferences better than any filter or search engine ever could.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-12"
        style={{ color: 'white' }}
      >
        {/* 1 */}
        <div className="card card--rounded padding--md margin--md bg-[var(--ifm-color-primary)] transform transition duration-300 hover:scale-105 hover:bg-[var(--ifm-color-info)]">
          <div className="card__body">
            <h2 className="text--xl margin-bottom--sm">Smart AI Matching</h2>
            <p className="text--normal">
              Our AI analyzes more than just square footage and location. It factors in lifestyle, design preferences, and even noise levels — helping you find a place that feels like home.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="card card--rounded padding--md margin--md bg-[var(--ifm-color-primary)] transform transition duration-300 hover:scale-105 hover:bg-[var(--ifm-color-info)]">
          <div className="card__body">
            <h2 className="text--xl margin-bottom--sm">
              Fast & Personalized
            </h2>
            <p className="text-gray-700">
              Unlike basic filter-based sites, our platform learns as you browse — offering personalized suggestions tailored in real time to your evolving preferences.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="card card--rounded padding--md margin--md bg-[var(--ifm-color-primary)] transform transition duration-300 hover:scale-105 hover:bg-[var(--ifm-color-info)]">
          <div className="card__body">
            <h2 className="text--xl margin-bottom--sm">
              Emotional Fit Detection
            </h2>
            <p className="text-gray-700">
              Using sentiment analysis and visual cues, Houzed AI identifies listings that resonate emotionally — homes you’re more likely to <em>feel</em> connected to.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="card card--rounded padding--md margin--md bg-[var(--ifm-color-primary)] transform transition duration-300 hover:scale-105 hover:bg-[var(--ifm-color-info)]">
          <div className="card__body">
            <h2 className="text--xl margin-bottom--sm">
              Neighborhood Intelligence
            </h2>
            <p className="text-gray-700">
              We evaluate local crime data, commute times, school ratings, and community reviews to give you a full picture — not just a pin on a map.
            </p>
          </div>
        </div>

        {/* 5 */}
        <div className="card card--rounded padding--md margin--md bg-[var(--ifm-color-primary)] transform transition duration-300 hover:scale-105 hover:bg-[var(--ifm-color-info)]">
          <div className="card__body">
            <h2 className="text--xl margin-bottom--sm">
              Predictive Market Insights
            </h2>
            <p className="text-gray-700">
              Our AI doesn’t just look at today — it predicts pricing trends, demand shifts, and area growth, helping you invest smarter and plan long term.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="card card--rounded padding--md margin--md bg-[var(--ifm-color-primary)] transform transition duration-300 hover:scale-105 hover:bg-[var(--ifm-color-info)]">
          <div className="card__body">
            <h2 className="text--xl margin-bottom--sm">
              Privacy-First AI
            </h2>
            <p className="text-gray-700">
              Your preferences stay your own. Our models run securely and do not share or sell your personal data — ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
