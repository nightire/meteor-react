import React from 'react';
import {mount} from 'react-mounter';
import {Layout, Welcome} from '../imports/Application.jsx';

FlowRouter.route('/', {
  action() {
    mount(Layout, {
      content: (<Welcome name="nightire" />),
    });
  },
});
