import React, {Component, PropTypes} from 'react';
// import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
import {IntlProvider} from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';

export default StaticLayout = ({locale, content}) => (
  <IntlProvider locale={locale}>
    <div className="container">
      <nav className="navigation">
        <a href={FlowRouter.path('home')}>首页</a>
      </nav>

      <main role="application">
        <header>
          <h1>Meteor with React!</h1>
        </header>

        <div>{content(locale)}</div>
      </main>
    </div>
  </IntlProvider>
);

StaticLayout.propTypes = {
  content: PropTypes.func.isRequired,
};

StaticLayout.displayName = 'Application';

// just like FastClick.
injectTapEventPlugin();
