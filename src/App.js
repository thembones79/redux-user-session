import React from "react";
import { connect } from "react-redux";

import { onLogIn, onLogOut } from "./actions";

class App extends React.Component {
  loginButtonClickHandler = () => {
    !this.props.user ? this.props.onLogIn() : this.props.onLogOut();
  };

  render() {
    return (
      <div>
        <div>
          {!this.props.user ? " " : "Logged as " + this.props.user.username}
        </div>
        <button onClick={this.loginButtonClickHandler}>
          {!this.props.user ? "Log in" : "Log out"}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { onLogIn, onLogOut })(App);
