import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
