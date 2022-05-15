import '../styles/App.css';
import {Route, Switch} from "react-router-dom";
import TodayPerfume from "../pages/TodayPerfume";
import Archive from "../pages/Archive";

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={TodayPerfume} />
            <Route exact path='/perfume' component={Archive} />

            {/*<Route exact path="/search" component />*/}
            {/*<Route exact path="/login" component />*/}
            {/*<Route exact path="/mypage" component />*/}
        </Switch>
    </div>

  );
}

export default App;
