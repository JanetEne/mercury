import ButtonComponent from "components/button";
import React from "react";
import { ReactComponent as BackArrow } from "assets/svg/backArrow.svg";
import { ReactComponent as TransparentStar } from "assets/svg/transparentStar.svg";
import { ReactComponent as BlockStar } from "assets/svg/blockStar.svg";
import { useNavigate } from "react-router-dom";
import UserContext from "context/userContext";
import "./styles.scss";

const UserDetails = () => {
  const { userDetails } = React.useContext(UserContext);
  const navigate = useNavigate();

  const userName = `${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName}`;
  const guarantorUserName = `${userDetails?.guarantor?.firstName} ${userDetails?.guarantor?.lastName}`;

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="userDetailsContainer">
      <div
        className="backArrowContainer"
        onClick={() => navigate("/app/users")}
        style={{ cursor: "pointer" }}>
        <BackArrow />
        <h3>Back to Users</h3>
      </div>
      <div className="headerTextButton">
        <h5>User Details</h5>
        <div className="buttonContainer">
          <ButtonComponent
            type="button"
            text="BLACKLIST USER"
            variant="danger"
          />
          <ButtonComponent
            type="button"
            text="ACTIVATE USER"
            variant="transparent"
          />
        </div>
      </div>
      <div className="profileCard">
        <div className="detailsSection">
          <div className="detailsContainer">
            <div className="profileDetailsContainer">
              <div>
                <img
                  src={userDetails?.profile?.avatar}
                  alt="profile avatar"
                  className="profileContainer"
                />
              </div>
              <div className="textContainer">
                <h2>{userName}</h2>
                <h6>LSQFf587g90</h6>
              </div>
            </div>

            <div className="usersTier">
              <div className="textStarsContainer">
                <h5>Users Tier</h5>
                <div className="starContainer">
                  <BlockStar />
                  <TransparentStar />
                  <TransparentStar />
                </div>
              </div>
            </div>

            <div className="usersAccountContainer">
              <div className="accountBalance">
                <h1>{`₦${userDetails?.accountBalance?.toString()}`}</h1>
                <h5>{userDetails?.accountNumber}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs">
          <div className="generalOptions">
            <h5>General Details</h5>
          </div>
          <div className="options">
            <h4>Documents</h4>
          </div>
          <div className="options">
            <h4>Bank Details</h4>
          </div>
          <div className="options">
            <h4>Loans</h4>
          </div>
          <div className="options">
            <h4>Savings</h4>
          </div>
          <div className="options">
            <h4>App and System</h4>
          </div>
        </div>
      </div>

      <div className="userInformation">
        <h4>Personal Information</h4>
        <div className="personalInformationSection">
          <div>
            <h3>Full Name</h3>
            <h6>{userName}</h6>
          </div>
          <div>
            <h3>Phone Number</h3>
            <h6>{userDetails?.profile?.phoneNumber}</h6>
          </div>
          <div>
            <h3>Email Address</h3>
            <h6>{userDetails?.email}</h6>
          </div>
          <div>
            <h3>BVN</h3>
            <h6>{userDetails?.profile?.bvn}</h6>
          </div>
          <div>
            <h3>Gender</h3>
            <h6>{userDetails?.profile?.gender}</h6>
          </div>
          <div>
            <h3>Marital Status</h3>
            <h6>Single</h6>
          </div>
          <div>
            <h3>Children</h3>
            <h6>None</h6>
          </div>
          <div>
            <h3>Address</h3>
            <h6>{userDetails?.profile?.address}</h6>
          </div>
        </div>

        <h4>Education and Employment</h4>
        <div className="educationInformationSection">
          <div>
            <h3>Level of Education</h3>
            <h6>{userDetails?.education?.level}</h6>
          </div>
          <div>
            <h3>Employment Status</h3>
            <h6>{userDetails?.education?.employmentStatus}</h6>
          </div>
          <div>
            <h3>Sector of employment</h3>
            <h6>{userDetails?.education?.sector}</h6>
          </div>
          <div>
            <h3>duration of employment</h3>
            <h6>{userDetails?.education?.duration}</h6>
          </div>
          <div>
            <h3>office email</h3>
            <h6>{userDetails?.education?.officeEmail}</h6>
          </div>
          <div>
            <h3>Monthly Income</h3>
            <h6>{`₦${userDetails?.education?.monthlyIncome[0]} - ₦${userDetails?.education?.monthlyIncome[1]}`}</h6>
          </div>
          <div>
            <h3>Loan repayment</h3>
            <h6>{userDetails?.education?.loanRepayment}</h6>
          </div>
        </div>

        <h4>Socials</h4>
        <div className="socialsInformationSection">
          <div>
            <h3>Twitter</h3>
            <h6>{userDetails?.socials?.twitter}</h6>
          </div>
          <div>
            <h3>Facebook</h3>
            <h6>{userDetails?.socials?.facebook}</h6>
          </div>
          <div>
            <h3>Instagram</h3>
            <h6>{userDetails?.socials?.instagram}</h6>
          </div>
        </div>

        <h4>Guarantor</h4>
        <div className="guarantorInformationSection">
          <div>
            <h3>Full Name</h3>
            <h6>{guarantorUserName}</h6>
          </div>
          <div>
            <h3>Phone Number</h3>
            <h6>{userDetails?.guarantor?.phoneNumber}</h6>
          </div>
          <div>
            <h3>Gender</h3>
            <h6>{userDetails?.guarantor?.gender}</h6>
          </div>
          <div>
            <h3>Relationship</h3>
            <h6>
              {userDetails?.guarantor?.gender === "Male" ? "Brother" : "Sister"}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
