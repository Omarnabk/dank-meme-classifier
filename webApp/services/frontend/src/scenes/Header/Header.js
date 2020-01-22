import React from "react";
import HeaderLayout from "./HeaderLayout";
import "./Header.css";

const Header = ({selected, onTabClick}) => (
    <HeaderLayout
        selected={selected}
        onTabClick={onTabClick}
    />
);

export default Header;
