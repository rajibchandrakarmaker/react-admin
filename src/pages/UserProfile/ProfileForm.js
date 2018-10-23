import React from 'react';

const ProfileForm = () => (
  <div className="card">
    <div className="header">
      <h4 className="title">Edit Profile</h4>
    </div>
    <div className="content">
      <form>
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label>Company (disabled)</label>
              <input
                type="text"
                className="form-control"
                disabled=""
                placeholder="Company"
                defaultValue="Augmedix"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                disabled="disabled"
                defaultValue="rajib_karmaker"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="rajib@augmedix.com"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Home Address"
                defaultValue="Road 5, House 49#, Mohamadpur, Dhaka"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                className="form-control"
                placeholder="City"
                defaultValue="Dhaka"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                className="form-control"
                placeholder="Country"
                defaultValue="Bangladesh"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Postal Code</label>
              <input
                type="number"
                className="form-control"
                placeholder="1209"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label>About Me</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Here can be your description"
                defaultValue="Front End Developer, Tech Enthusiast and Technology blogger"
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-info btn-fill pull-right">
          Update Profile
        </button>
        <div className="clearfix" />
      </form>
    </div>
  </div>
);

export default ProfileForm;
