import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// just like FastClick.
injectTapEventPlugin();

export default StaticLayout = ({content}) => (
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

StaticLayout.propTypes = {
  content: PropTypes.object.isRequired,
};

StaticLayout.displayName = 'Application';
