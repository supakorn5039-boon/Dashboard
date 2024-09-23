export type FormData = {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  bloodType: string;
  birthday: Date;
  sex: "male" | "female";
  img?: File;
};
