export interface IUserResponse {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: UserEducation;
  email: string;
  guarantor: Guarantor;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: UserProfile;
  socials: UserSocials;
  userName: string;
}

export interface UserEducation {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
}

export interface Guarantor {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserProfile {
  address: string;
  avatar: string;
  bvn: string;
  currency: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export interface UserSocials {
  facebook: string;
  twitter: string;
  instagram: string;
}
