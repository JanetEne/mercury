import UserCards from "components/userCards";
import React from "react";
import { ReactComponent as ActiveUsers } from "assets/svg/activeUser.svg";
import { ReactComponent as LoanLogo } from "assets/svg/loan.svg";
import { ReactComponent as Savings } from "assets/svg/saving.svg";
import { ReactComponent as UsersLogo } from "assets/svg/user.svg";
import "./styles.scss";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="DashboardContainer">
      <h5>Dashboard</h5>
      <div className="userCardContainer">
        <Link to={"/app/users"}>
          <UserCards
            text="USERS"
            value={2453}
            iconType={"user"}
            icon={<UsersLogo />}
          />
        </Link>

        <UserCards
          text="ACTIVE USERS"
          value={2453}
          iconType={"activeUser"}
          icon={<ActiveUsers />}
        />
        <UserCards
          text="USERS WITH LOANS"
          value={12453}
          iconType={"loans"}
          icon={<LoanLogo />}
        />
        <UserCards
          text="USERS WITH SAVINGS"
          value={102453}
          iconType={"savings"}
          icon={<Savings />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
