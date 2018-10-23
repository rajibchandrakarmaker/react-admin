import React from 'react';
import UserStatistic from './UserStatistic';
import ServerStatus from './ServerStatus';
import SalesStatistics from './SalesStatistics';

const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ServerStatus />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <SalesStatistics />
        </div>
        <div className="col-md-6">
          <UserStatistic />
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
