import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

class Nav extends Component {
  state = {};

  render() {
    let { location } = this.props;
    return (
      <ul className="nav">
        <li className={location.pathname === '/' ? 'active' : null}>
          <Link to="/">
            <i className="pe-7s-graph" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          className={
            this.isPathActive('/components') || this.state.componentMenuOpen
              ? 'active'
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({
                componentMenuOpen: !this.state.componentMenuOpen
              })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-plugin" />
            <p>
              UI Elements
              <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.componentMenuOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive('/components/buttons') ? 'active' : null
                  }
                >
                  <Link to="/components/buttons">Buttons</Link>
                </li>
                <li
                  className={
                    this.isPathActive('/components/notifications')
                      ? 'active'
                      : null
                  }
                >
                  <Link to="/components/notifications">Notifications</Link>
                </li>
                <li
                  className={
                    this.isPathActive('/components/panels') ? 'active' : null
                  }
                >
                  <Link to="/components/panels">Tabs & Accordion</Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li
          className={
            this.isPathActive('/tables') || this.state.tableMenuOpen
              ? 'active'
              : null
          }
        >
          <a
            onClick={() =>
              this.setState({ tableMenuOpen: !this.state.tableMenuOpen })
            }
            data-toggle="collapse"
          >
            <i className="pe-7s-news-paper" />
            <p>
              Tables <b className="caret" />
            </p>
          </a>
          <Collapse in={this.state.tableMenuOpen}>
            <div>
              <ul className="nav">
                <li
                  className={
                    this.isPathActive('/tables/regular-tables')
                      ? 'active'
                      : null
                  }
                >
                  <Link to="/tables/regular-tables">Regular Table</Link>
                </li>
                <li
                  className={
                    this.isPathActive('/tables/fixed-data-table')
                      ? 'active'
                      : null
                  }
                >
                  <Link to="/tables/react-bootstrap-table">
                    React Bootstrap Table
                  </Link>
                </li>
              </ul>
            </div>
          </Collapse>
        </li>
      </ul>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}

export default withRouter(Nav);
