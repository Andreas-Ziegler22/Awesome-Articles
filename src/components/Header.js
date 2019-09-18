import React, { Fragment } from "react";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>What to do?</h1>
        <span className="tagline">This could be Article list.</span>
      </Fragment>
    );
  }
};

export default Header;