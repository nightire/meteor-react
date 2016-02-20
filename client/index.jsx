import React from 'react';
import { render } from 'react-dom';
import { Welcome } from '../imports/Welcome.jsx';

Meteor.startup(() => {
  render(
    <Welcome name="nightire" />,
    document.querySelector('[role="application"]')
  );
});
