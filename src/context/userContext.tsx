import { IUserResponse } from "core/interfaces/user";
import { Constants } from "core/utils/constants";
import { SecureStorage } from "core/utils/storage";
import React from "react";

const secureStorage = new SecureStorage();

interface IUserContext {
  userDetails: IUserResponse;
  updateUserDetails: (value?: IUserResponse) => void;
}

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const UserContext = React.createContext<IUserContext>({} as IUserContext);
export const UserProvider = UserContext.Provider;

export const setLogout = (route: string) => {
  console.log(route);
  secureStorage.removeItem(Constants.userDetails);
  window.location.href = route;
};

export const UserProviderContainer: React.FC<Props> = ({ children }) => {
  const [userDetails, setUserDetails] = React.useState<IUserResponse>(
    {} as IUserResponse,
  );

  React.useEffect(() => {
    let storedUserDetail = secureStorage.getItem(Constants.userDetails);
    if (typeof storedUserDetail === "string")
      setUserDetails(JSON.parse(storedUserDetail));
  }, []);

  const updateUserDetails = (value?: IUserResponse | undefined) => {
    if (value) {
      secureStorage.storeItem(Constants.userDetails, JSON.stringify(value));
      setUserDetails(value);
      return;
    }
    setUserDetails({} as IUserResponse);
  };

  React.useEffect(() => {
    const userDetails = secureStorage.getItem(Constants.userDetails);
    if (userDetails) updateUserDetails(JSON.parse(userDetails));
  }, []);

  return (
    <UserProvider
      value={{
        userDetails,
        updateUserDetails,
      }}>
      {children}
    </UserProvider>
  );
};
export default UserContext;
