import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Button from '../../../reusecore/Button';

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""];
  if (props.className) {
    addAllClasses.push(props.className);
  }
  return (
    <ul className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <li
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >

          <AnchorLink
            to={menu.path}
          >
            {menu.name}
          </AnchorLink>
        </li>
      ))
      }
      {props.expand && <>
        <li className={
          "nav-item has-dropdown"
        }>
          <Button onClick={() => props.setModalOpen(true)} className="nav-btn">
            <span>Accéder à eProgram</span>
          </Button>

        </li>
      </>}
    </ul >
  );
};

export default ScrollspyMenu;
