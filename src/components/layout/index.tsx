import React from "react";
import { ReactComponent as Close } from "assets/svg/close.svg";
import { ReactComponent as Users } from "assets/svg/users.svg";
import { ReactComponent as Guarantors } from "assets/svg/guarantors.svg";
import { ReactComponent as Loans } from "assets/svg/loans.svg";
import { ReactComponent as Decisions } from "assets/svg/decisions.svg";
import { ReactComponent as DashBoard } from "assets/svg/dashboardIcon.svg";
import { ReactComponent as Briefcase } from "assets/svg/briefcase.svg";
import { ReactComponent as FluidArrowDown } from "assets/svg/fluidArrowDown.svg";
import { ReactComponent as Savings } from "assets/svg/savings.svg";
import { ReactComponent as LoanRequest } from "assets/svg/loanRequests.svg";
import { ReactComponent as WhiteList } from "assets/svg/whitelist.svg";
import { ReactComponent as Karma } from "assets/svg/karma.svg";
import { ReactComponent as SavingProducts } from "assets/svg/savingProducts.svg";
import { ReactComponent as Fees } from "assets/svg/feesPricing.svg";
import { ReactComponent as Transactions } from "assets/svg/transactions.svg";
import { ReactComponent as Services } from "assets/svg/services.svg";
import { ReactComponent as ServiceAccount } from "assets/svg/serviceAmount.svg";
import { ReactComponent as SettleMents } from "assets/svg/settlements.svg";
import { ReactComponent as Report } from "assets/svg/reports.svg";
import { ReactComponent as Preferences } from "assets/svg/preference.svg";
import { ReactComponent as Audit } from "assets/svg/audit.svg";
import { ReactComponent as SystemMsgs } from "assets/svg/systemMsgs.svg";
import { ReactComponent as Logout } from "assets/svg/logout.svg";

import { INavItems } from "core/interfaces/nav";
import { Link, Outlet, useLocation } from "react-router-dom";
import NavBar from "components/navBar";
import "./layout.scss";
import { setLogout } from "context/userContext";

const Layout = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const location = useLocation();

  const handleLogout = () => {
    setLogout("/");
  };

  const customerData: INavItems[] = [
    {
      name: "Users",
      link: "/app/users",
      icon: <Users />,
    },
    {
      name: "Guarantors",
      link: "/guarantors",
      icon: <Guarantors />,
    },
    {
      name: "Loans",
      link: "/loan",
      icon: <Loans />,
    },
    {
      name: "Decision Models",
      link: "/decisions",
      icon: <Decisions />,
    },
    {
      name: "Savings",
      link: "/savings",
      icon: <Savings />,
    },
    {
      name: "Loan Requests",
      link: "/loan-requests",
      icon: <LoanRequest />,
    },
    {
      name: "Whitelist",
      link: "/whitelist",
      icon: <WhiteList />,
    },
    {
      name: "Karma",
      link: "/karma",
      icon: <Karma />,
    },
  ];

  const businessData: INavItems[] = [
    {
      name: "Organization",
      link: "/organization",
      icon: <Briefcase />,
    },
    {
      name: "Loan Products",
      link: "/loans",
      icon: <LoanRequest />,
    },
    {
      name: "Savings Product",
      link: "/savings",
      icon: <SavingProducts />,
    },
    {
      name: "Fees and Charges",
      link: "/Fees",
      icon: <Fees />,
    },
    {
      name: "Transactions",
      link: "/transactions",
      icon: <Transactions />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <Services />,
    },
    {
      name: "Service Account",
      link: "/services",
      icon: <ServiceAccount />,
    },
    {
      name: "Settlements",
      link: "/settlement",
      icon: <SettleMents />,
    },
    {
      name: "Reports",
      link: "/report",
      icon: <Report />,
    },
  ];

  const settings: INavItems[] = [
    {
      name: "Preferences",
      link: "/preference",
      icon: <Preferences />,
    },
    {
      name: "Fees and Pricing",
      link: "/feees",
      icon: <Fees />,
    },
    {
      name: "Audit Logs",
      link: "/audit",
      icon: <Audit />,
    },
    {
      name: "System Messages",
      link: "/system",
      icon: <SystemMsgs />,
    },
  ];

  return (
    <div className="layout">
      <NavBar onClick={() => setToggle(!toggle)} />
      <aside className={toggle ? "showMobileNav" : "hideMobileNav"}>
        <>
          <i onClick={() => setToggle(!toggle)}>
            <Close />
          </i>

          <div className="switchOrganization">
            <Briefcase /> <span>Switch Organization</span>
            <FluidArrowDown />
          </div>

          <ul>
            <Link to={"/app"}>
              <div
                className={`${
                  location.pathname === "/app" ? "activeLink" : ""
                }`}
                onClick={() => setToggle(false)}>
                <li>
                  <DashBoard /> <span>Dashboard</span>
                </li>
              </div>
            </Link>
          </ul>

          <h1>CUSTOMERS</h1>
          <ul>
            {customerData.map((item, index) => (
              <Link to={item.link} key={index}>
                <div
                  className={`${
                    location.pathname.includes(item.link) ? "activeLink" : ""
                  }`}
                  onClick={() => setToggle(false)}>
                  <li>
                    {item.icon} <span>{item.name}</span>
                  </li>
                </div>
              </Link>
            ))}
          </ul>
          <h1>BUSINESSES</h1>
          <ul>
            {businessData.map((item, index) => (
              <Link to={item.link} onClick={() => setToggle(false)} key={index}>
                <div
                  className={`flex ${
                    location.pathname.includes(item.link) ? "activeLink" : ""
                  }`}
                  onClick={() => setToggle(false)}>
                  <li>
                    {item.icon} <span>{item.name}</span>
                  </li>
                </div>
              </Link>
            ))}
          </ul>

          <h1>SETTINGS</h1>
          <ul>
            {settings.map((item, index) => (
              <Link to={item.link} key={index}>
                <div
                  className={`${
                    location.pathname.includes(item.link) ? "activeLink" : ""
                  }`}
                  onClick={() => setToggle(false)}>
                  <li>
                    {item.icon} <span>{item.name}</span>
                  </li>
                </div>
              </Link>
            ))}
          </ul>

          <ul>
            <div className="logout" onClick={handleLogout}>
              <li>
                <Logout /> <span>Logout</span>
              </li>
            </div>
          </ul>
        </>
      </aside>
      <div className="main">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
