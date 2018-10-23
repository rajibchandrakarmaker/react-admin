import React from 'react';
import { Route } from 'react-router-dom';
import Buttons from './Buttons';
import Notifications from './Notifications';
import Panels from './Panels';

const Components = ({ match }) => (
  <div className="content">
    <Route path={`${match.url}/buttons`} component={Buttons} />
    <Route path={`${match.url}/notifications`} component={Notifications} />
    <Route path={`${match.url}/panels`} component={Panels} />
  </div>
);

export default Components;
