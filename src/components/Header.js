import React from "react";

const Header = props => {
  return (
    <Header className="header">
      <h1>Awesome Articles?</h1>
      <span className="tagline">{props.tagline}</span>
    </Header>
  );
};

export default Header;