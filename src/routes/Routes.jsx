import { Switch, Route } from "react-router-dom"

import Home from "../pages/Home"
import Company from "../pages/Company"
import Contact from "../pages/Contact"
import NewProject from "../pages/NewProject"

function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/company">
                <Company />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/newproject">
                <NewProject />
            </Route>
        </Switch>
    )
}
export default Router