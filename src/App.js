import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import WatchVideoPage from './pages/WatchVideoPage';
import CourseRequestPage from './pages/CourseRequestPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
        <Route path="/couse/:id">
          <CourseRequestPage />
        </Route>
        <Route path="/watch/:id">
          <WatchVideoPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
