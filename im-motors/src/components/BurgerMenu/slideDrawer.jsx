import React from "react";
import { NavLink } from "react-router-dom";
import CloseButton from "./close-button";
const slideDrawer = props => {
  console.log("myprops", props);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div>
      <div className={drawerClasses}>
        <CloseButton closeMenu={props.close} />
        <nav>
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
      </div>
    </div>
  );
};
export default slideDrawer;
