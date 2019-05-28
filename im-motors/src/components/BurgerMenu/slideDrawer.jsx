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
<<<<<<< HEAD
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
        <i className="fas fa-times" />
      </button>
=======
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
>>>>>>> landingpage
    </div>
  );
};
export default slideDrawer;
