import React from "react";
import "./styles.scss";

interface IUserCardProps {
  text: string;
  value: number;
  iconType: "user" | "activeUser" | "loans" | "savings";
  icon: JSX.Element;
}

const UserCards: React.FC<IUserCardProps> = ({
  text,
  value,
  iconType,
  icon,
}) => {
  return (
    <div className="cardContainer">
      <div
        className={`iconContainer ${
          iconType === "user"
            ? "userIcon"
            : iconType === "activeUser"
            ? "activeUserIcon"
            : iconType === "loans"
            ? "loanIcon"
            : "savingsIcon"
        }`}>
        <div>{icon}</div>
      </div>
      <h4>{text}</h4>
      <h1>{value.toLocaleString()}</h1>
    </div>
  );
};

export default UserCards;
