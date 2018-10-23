import React from 'react';
import ChartistGraph from 'react-chartist';

const UserStatistic = () => {
  let dataPreferences = {
    labels: ['62%', '32%', '6%'],
    series: [62, 32, 6]
  };

  let optionsPreferences = {
    donut: false,
    donutWidth: 40,
    startAngle: 0,
    total: 100,
    showLabel: true,
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      offset: 0
    }
  };

  let chartType = 'Pie';

  return (
    <div className="card">
      <div className="header">
        <h4 className="title">User Statistics</h4>
        <p className="category">User Daily Report</p>
      </div>
      <div className="content">
        <ChartistGraph
          data={dataPreferences}
          options={optionsPreferences}
          type={chartType}
          className={'ct-chart ct-perfect-fourth'}
        />
      </div>
      <div className="footer">
        <div className="legend">
          <div className="item">
            <i className="fa fa-circle text-info" /> Current User
          </div>
          <div className="item">
            <i className="fa fa-circle text-danger" /> New User
          </div>
          <div className="item">
            <i className="fa fa-circle text-warning" /> Old User
          </div>
        </div>
        <hr />
        <div className="stats">
          <i className="fa fa-clock-o" /> Upadted 10 minutes ago
        </div>
      </div>
    </div>
  );
};

export default UserStatistic;
