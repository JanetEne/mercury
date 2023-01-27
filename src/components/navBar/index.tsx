import ProfileImage from "assets/img/profileImage.png";
import { ReactComponent as ArrowDown } from "assets/svg/arrowDown.svg";
import { ReactComponent as Bell } from "assets/svg/bell.svg";
import { ReactComponent as Menu } from "assets/svg/menu.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import ButtonComponent from "components/button";
import InputComponent from "components/input";
import React from "react";
import "./styles.scss";

export interface INavbarProps {
  onClick?: () => void;
}

const NavBar: React.FC<INavbarProps> = ({ onClick }) => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <div className="menu">
          <Menu className="hamburger" onClick={onClick} />
        </div>
        <div className="showSearchBar">
          <div className="searchBar">
            <InputComponent type={"text"} placeholder={"Search for anything"} />
            <ButtonComponent text={<Search />} variant={"search"} />
          </div>
        </div>
        <div className="headerContainer">
          
          <div className="searchBar">
            <InputComponent type={"text"} placeholder={"Search for anything"} />
            <ButtonComponent text={<Search />} variant={"search"} />
          </div>
          <div className="rightSection">
            <h5>Docs</h5>
            <div>
              <Bell />
            </div>
            <div className="imageProfileContainer">
              <div className="imageContainer">
                <img src={ProfileImage} alt="profile avatar" />
              </div>
              <div className="nameIconContainer">
                <h4>Adedeji</h4>
                <ArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
