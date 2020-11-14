import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import WatchVideoPage from './pages/WatchVideoPage';
import CourseRequestPage from './pages/CourseRequestPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>   
      <Navigation />
      <Switch>  
        <Route path="/course/:id">
          <CourseRequestPage />
        </Route>
        <Route path="/watch/:id">
          <WatchVideoPage />
        </Route>
        <Route path="/">
          <HomePage/> 
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
