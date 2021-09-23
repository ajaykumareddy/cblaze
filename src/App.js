// import './App.scss';
import Settings from "./components/Settings/Settings";
import School from './components/School/School';
import SchoolHome from "./components/SchoolHome/SchoolHome";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Settings />
        <BrowserRouter>
            <Switch>
                <Route path="/school">
                    <SchoolHome />
                </Route>
                <Route path="/">
                    <Redirect to="/register" />
                    <School />
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
