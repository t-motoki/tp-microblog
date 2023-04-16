import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <main>
        <h1>ここは概要ページです</h1>
      </main>
    </div>
  );
};

export default About;
