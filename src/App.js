import Homeun from "./pages/home/Homeun";
import Homepix from "./pages/home/Homepix";
import Search from "./pages/search/Search";
import Testing from "./pages/home/Testing";
import Rain from "./pages/loading/Rain";
import Windmill from "./pages/loading/Windmill";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact={true}>
          <Homepix />
        </Route>
        <Route path="/search/:location">
          <Search />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

export default App;
