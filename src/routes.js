import React from 'react'
import {Route, Switch} from "react-router-dom";
import MyContacts from "./MyContacts";
import Form from "./Form";

class Routes extends React.Component{
  render() {
    return(
      <Switch>
        <Route exact path='/' component={MyContacts}/>
        <Route exact path='/info/:id' component={Form}/>
      </Switch>
    )
  }
}

export default Routes