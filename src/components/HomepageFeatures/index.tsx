import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Plan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Our AI Agent helps buyers, sellers, and their agents plan and track home showings, appointments, and schedules. Listing agents can onboard their properties and set AI-driven booking preferences, while buyer agents can leverage the AI Agent to efficiently plan and book showings on behalf of their clients.
      </>
    ),
  },
  {
    title: 'Search',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Ask our AI agent to search for homes and track new listings based on your preferences. Houzed.ai helps buyers manage their home search while also assisting agents in organizing and streamlining searches for all their clients. Buyers and agents can analyze watchlisted properties to identify the best matches and efficiently plan showings.
      </>
    ),
  },
  {
    title: 'Show',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
       AI Agent tracks check-ins, sends property alerts, and keeps you on schedule. It summarizes showing feedback, highlights key property features, and analyzes data to provide insights for smarter home-buying decisions.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
