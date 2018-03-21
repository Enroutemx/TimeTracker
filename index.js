import React from "react";
import { createRootNavigator } from "./config/routes";
import { isSignedIn } from "./managers/authentication";
import FireRoute from './lib/FireRoute/source/fireroute'

export default class App extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        signedIn: false,
        checkedSignIn: false
      };
    }
  
    componentWillMount() {
      FireRoute.init()
      isSignedIn()
        .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
        .catch(err => alert("An error occurred"));
    }
  
    render() {
      const { checkedSignIn, signedIn } = this.state;
  
      // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
      if (!checkedSignIn) {
        return null;
      }
  
      const Layout = createRootNavigator(signedIn);
      return <Layout />;
    }
}