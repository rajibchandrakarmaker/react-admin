import React from 'react';
import Chart from 'react-chartist';

let data = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
    [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
  ]
};

let options = {
  seriesBarDistance: 10,
  axisX: {
    showGrid: false
  },
  height: '245px'
};

let responsiveOptions = [
  [
    'screen and (max-width: 640px)',
    {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function(value) {
          return value[0];
        }
      }
    }
  ]
];

const SalesStatistics = () => (
  <div className="card ">
    <div className="header">
      <h4 className="title">2018 Glass Sales</h4>
      <p className="category">Glass Sales Statistics</p>
    </div>
    <div className="content">
      <Chart
        data={data}
        options={options}
        responsiveOptions={responsiveOptions}
        type="Bar"
        className="ct-chart"
      />
    </div>
    <div className="footer">
      <div className="legend">
        <div className="item">
          <i className="fa fa-circle text-info" /> Google Glass
        </div>
        <div className="item">
          <i className="fa fa-circle text-danger" /> Sony smart Glass
        </div>
      </div>
      <hr />
      <div className="stats">
        <i className="fa fa-check" /> Upadted 1 month ago
      </div>
    </div>
  </div>
);

export default SalesStatistics;
