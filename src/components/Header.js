import React from "react";

class Header extends React.Component {
  render() {
    return (
      <Header className="header">
        <h1>Awesome Articles?</h1>
        <span className="tagline">{this.props.tagline}</span>
      </Header>
    );
  }
};

export default Header;