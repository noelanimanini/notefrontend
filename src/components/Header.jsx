import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-item">
          <h2> hello {capitalizeFirstLetter(props.user.username)}</h2>
        </li>
      </ul>
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default Header;
