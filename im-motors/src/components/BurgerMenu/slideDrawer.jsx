import React from "react";
import { NavLink } from "react-router-dom";
import CloseButton from "./close-button";
const slideDrawer = props => {
  // console.log("myprops", props);
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div>
      <div className={drawerClasses}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={props.close}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/inventory"
                activeClassName="active"
                onClick={props.close}
              >
                Inventory
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/finance"
                activeClassName="active"
                onClick={props.close}
              >
                Finance
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                onClick={props.close}
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                activeClassName="active"
                onClick={props.close}
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </nav>
        <CloseButton closeMenu={props.close} />
      </div>
    </div>
  );
};
export default slideDrawer;
