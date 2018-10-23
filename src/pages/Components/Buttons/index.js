import React, { Component } from 'react';
import Colors from './Colors';
import ButtonSizes from './ButtonSizes';
const ButtonsPage = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <Colors />
            </div>
            <div className="col-md-6">
              <ButtonSizes />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ButtonsPage;
