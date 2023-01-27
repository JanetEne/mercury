import UserCards from "components/userCards";
import React from "react";
import { ReactComponent as UsersLogo } from "assets/svg/user.svg";
import { ReactComponent as ActiveUsers } from "assets/svg/activeUser.svg";
import { ReactComponent as LoanLogo } from "assets/svg/loan.svg";
import { ReactComponent as Savings } from "assets/svg/saving.svg";
import { ReactComponent as TableIcon } from "assets/svg/tableIcon.svg";
import { ReactComponent as EyeIcon } from "assets/svg/eye.svg";
import { ReactComponent as BlackListUser } from "assets/svg/blacklist.svg";
import { ReactComponent as ActivateUser } from "assets/svg/activate.svg";
import { ReactComponent as BackArrow } from "assets/svg/paginationBackArrow.svg";
import { ReactComponent as FrontArrow } from "assets/svg/paginationFowardArrow.svg";
import { ReactComponent as ArrowDown } from "assets/svg/fluidArrowDown.svg";
import Badge from "components/badge";
import Menu from "components/menu";
import { useNavigate } from "react-router-dom";
import FilterTray from "components/filterTray";
import { IUserResponse } from "core/interfaces/user";
import moment from "moment";
import ButtonComponent from "components/button";
import "./styles.scss";
import UserContext from "context/userContext";
import Spinner from "components/spinner";

const Users = () => {
  const navigate = useNavigate();
  const [showTray, setShowTray] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { updateUserDetails } = React.useContext(UserContext);
  const [userId, setUserId] = React.useState<string>("");
  const usersPerPage = 10;
  const [usersData, setUsersData] = React.useState<IUserResponse[]>([]);

  const totalPage = Math.ceil(usersData.length / usersPerPage);

  const totalVIewedItems = currentPage * usersPerPage;

  const firstUserItem = totalVIewedItems - usersPerPage;

  const newUserData = usersData.slice(firstUserItem, totalVIewedItems);

  const API_URL = process.env.REACT_APP_BASE_URL as string;

  React.useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsersData(data);
        setLoading(false);
      });
  }, [currentPage, API_URL]);

  React.useEffect(() => {
    if (userId !== "") {
      fetch(`${API_URL}/${userId}`)
        .then((response) => response.json())
        .then((data) => {
          updateUserDetails(data);
          navigate("/app/user-details");
        });
    }
  }, [userId, updateUserDetails, navigate, API_URL]);

  return (
    <div className="userContainer">
      <h5>Users</h5>
      <div className="userCardContainer">
        <UserCards
          text="USERS"
          value={2453}
          iconType={"user"}
          icon={<UsersLogo />}
        />
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
      <div className="tableContainer">
        <table>
          <thead onClick={() => setShowTray(!showTray)}>
            <tr>
              <th>
                <div className="header">
                  <h3>ORGANIZATION</h3>
                  <span>
                    <TableIcon />
                  </span>
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>USERNAME</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>EMAIL</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>PHONE NUMBER</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>DATE JOINED</h3>
                  <TableIcon />
                </div>
              </th>
              <th>
                <div className="header">
                  <h3>STATUS</h3>
                  <TableIcon />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td>
                  <Spinner />
                </td>
              </tr>
            ) : (
              newUserData &&
              newUserData.map((user: IUserResponse, index: number) => (
                <tr key={index}>
                  <td>
                    <h6>{user.orgName}</h6>
                  </td>
                  <td>
                    <h6>{user.userName}</h6>
                  </td>
                  <td>
                    <h6>{user.email}</h6>
                  </td>
                  <td>
                    <h6>{user.phoneNumber}</h6>
                  </td>
                  <td>
                    <h6>{moment(user.createdAt).format("LLL")}</h6>
                  </td>
                  <td>
                    <Badge text={"Active"} type={"active"} />
                  </td>
                  <td>
                    <Menu>
                      <div>
                        <div
                          className="menuIconText"
                          onClick={() => setUserId(user.id)}>
                          <EyeIcon />
                          <h2>View Details</h2>
                        </div>
                        <div className="menuIconText">
                          <BlackListUser />
                          <h2>Blacklist User</h2>
                        </div>
                        <div className="menuIconText">
                          <ActivateUser />
                          <h2>Activate User</h2>
                        </div>
                      </div>
                    </Menu>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          {showTray && <FilterTray />}
        </table>
      </div>

      <div className="paginationContainer">
        <div className="dropdownComponent">
          <h6>Showing</h6>
          <div className="dropdown">
            <h6>{totalVIewedItems}</h6>
            <ArrowDown />
          </div>
          <h3>out of</h3>
          <h3>{usersData.length}</h3>
        </div>
        <div className="paginationComponent">
          <div
            className={`arrowContainer ${currentPage === 1 ? "disabled" : ""}`}>
            <ButtonComponent
              text={<BackArrow />}
              onClick={() => setCurrentPage(currentPage - 1)}
              variant={"search"}
              disabled={currentPage === 1}
            />
          </div>
          <div></div>
          <div
            className={`arrowContainer ${
              currentPage === totalPage ? "disabled" : ""
            }`}>
            <ButtonComponent
              text={<FrontArrow />}
              onClick={() => setCurrentPage(currentPage + 1)}
              variant={"search"}
              disabled={currentPage === totalPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
