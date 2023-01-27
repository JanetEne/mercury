import React from "react";
import { ReactComponent as MenuLogo } from "assets/svg/more.svg";
import "./styles.scss";

interface IMenuProps {
  children: JSX.Element;
}

const Menu: React.FC<IMenuProps> = ({ children }) => {
  const [showOptions, setShowOptions] = React.useState<boolean>(false);

  return (
    <div className="menuContainer">
      <div
        className="logoContainer"
        onClick={() => setShowOptions(!showOptions)}>
        <MenuLogo />
      </div>
      {showOptions && (
        <div
          className={`menuChildrenContainer ${
            showOptions ? "showMenu" : "hideMenu"
          }`}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;
