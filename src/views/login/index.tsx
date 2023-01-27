import { ReactComponent as BackgroundImage } from "assets/svg/background.svg";
import ButtonComponent from "components/button";
import InputComponent from "components/input";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="leftSection">
        <div className="backgroundImageContainer">
          <BackgroundImage />
        </div>
      </div>
      <div className="rightSection">
        <h1>Welcome!</h1>
        <h4>Enter details to login.</h4>
        <InputComponent type="email" placeholder="Email" />
        <InputComponent
          type="password"
          placeholder="Password"
          trailing={"SHOW"}
        />
        <h5>FORGOT PASSWORD?</h5>
        <ButtonComponent
          text="LOG IN"
          variant="block"
          onClick={() => navigate("/app")}
        />
      </div>
    </div>
  );
};

export default Login;
