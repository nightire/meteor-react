import React from 'react';

const StaticLayout = ({content}) => (
  <div className="container">
    <nav className="navigation">
      <a href="/">首页</a>
    </nav>

    <main role="application">
      <header>
        <h1>Meteor with React!</h1>
      </header>

      <div>{content}</div>
    </main>
  </div>
);

export default StaticLayout;
