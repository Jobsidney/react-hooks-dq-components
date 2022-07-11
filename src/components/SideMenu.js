import React from "react";
import MenuLinks from "./MenuLinks";
import Search from "./Search"
function SideMenu() {
  return (
    <aside className="side-bar open">{
      <MenuLinks/>
      }</aside>
);
}

export default SideMenu;
