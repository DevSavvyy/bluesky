/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Extend</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Blue Sky Framework was designed from the ground up to be quickly & easily
        extended without having to modify core code thanks to our component system.
      </>
    ),
  },
  {
    title: <>Built By Professionals</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Blue Sky is ran by professional developers who do FiveM in their off-time. We put industry standards & quality over
        all else which means you can be confident in a stable & functional experience.
      </>
    ),
  }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Documentatino for Blue Sky Framework & its official components">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/requirements')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <div className={classnames('alert alert-danger', styles.alert)}>
        PLEASE NOTE, NOT ALL DOCUMENTATION ON THIS SITE IS ACCURATE. THIS WAS CREATED LONG AGO AND WASN'T MAINTAINED. THESE DOCS WILL NOT RECIEVE ANY FURTHER UPDATES. IF YOU'D LIKE TO HAVE ACCESS TO ADDING AND UPDATING DOCS FEEL FREE TO CONTACT ME ON DISCORD.
      </div>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
