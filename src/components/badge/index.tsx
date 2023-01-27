import React from "react";
import "./styles.scss";

interface IBadgeProps {
  text: string;
  type: "inactive" | "active" | "blacklist" | "pending";
}

const Badge: React.FC<IBadgeProps> = ({ type, text }) => {
  return (
    <div
      className={`badgeContainer ${
        type === "active"
          ? "activeBadge"
          : type === "inactive"
          ? "inactiveBadge"
          : type === "pending"
          ? "pendingBadge"
          : "blacklistBadge"
      }`}>
      <h3>{text}</h3>
    </div>
  );
};

export default Badge;
