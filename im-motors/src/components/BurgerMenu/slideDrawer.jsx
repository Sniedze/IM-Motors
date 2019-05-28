import React from "react";
import { NavLink } from "react-router-dom";

const slideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div>
      <nav className={drawerClasses}>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/inventory" activeClassName="active">
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink to="/finance" activeClassName="active">
              Finance
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeClassName="active">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="close-button">
        <i class="fas fa-times" />
      </button>
    </div>
  );
};
export default slideDrawer;
