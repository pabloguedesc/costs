import { Switch, Route } from "react-router-dom"

import Home from "../pages/home/Home"
import Company from "../pages/company/Company"
import Contact from "../pages/contact/Contact"
import NewProject from "../pages/new_project/NewProject"

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