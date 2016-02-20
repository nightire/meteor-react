import React from 'react';

export const Layout = ({content}) => (
  <main role="application">
    <header>
      <h1>Meteor with React!</h1>
      <hr />
    </header>

    <article>{content}</article>
  </main>
);

export const Welcome = ({name}) => (
  <h2> Welcome, {name}. </h2>
);
