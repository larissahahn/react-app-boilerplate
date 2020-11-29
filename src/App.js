import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import ToolbarComponent from './client/components/toolbar';
import SidenavComponent from './client/components/sidenav';

const ContentComponent = styled.div`
  padding-left: 90px;
`;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.content = React.createRef();
  }

  render() {
    return (
      <Router>
        <ToolbarComponent />
        <SidenavComponent contentRef={this.content} />
        <ContentComponent ref={this.content}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={(props) => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            ))}
          </Switch>
        </ContentComponent>
      </Router>
    );
  }
}

export default App;
