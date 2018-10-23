import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { Accordion, Panel } from 'react-bootstrap';

const PanelGroup = () => (
  <div className="row">
    <div className="col-md-6">
      <div className="card">
        <div className="header">
          <h4 className="title">Tabs</h4>
          <p className="category">Title of the Tabs</p>
        </div>
        <div className="content">
          <Tabs defaultActiveKey={1} id="plan-text-tabs">
            <Tab eventKey={1} title="Tab 1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </Tab>
            <Tab eventKey={3} title="Tab 3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and.
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="card">
        <div className="header">
          <h4 className="title">Accordion</h4>
          <p className="category">Title of the Accordion</p>
        </div>
        <div className="content">
          <div className="panel-group" id="accordion">
            <Accordion>
              <Panel
                header={
                  <span>
                    Collapse item 1<b className="caret" />
                  </span>
                }
                eventKey="1"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Panel>
              <Panel
                header={
                  <span>
                    Collapse item 2<b className="caret" />
                  </span>
                }
                eventKey="2"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Panel>
              <Panel
                header={
                  <span>
                    Collapse item 3<b className="caret" />
                  </span>
                }
                eventKey="3"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Panel>
              <Panel
                header={
                  <span>
                    Collapse item 4<b className="caret" />
                  </span>
                }
                eventKey="4"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PanelGroup;
