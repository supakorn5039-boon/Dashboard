import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

export const Schema = z.object({
  userName: z
    .string()
    .min(3, { message: "UserName must be at least 3 characters" })
    .max(20, { message: "UserName must be at most 20 characters" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  firstName: z.string().min(1, { message: "first name is required" }),
  lastName: z.string().min(1, { message: "last name is required" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required" }),
  bloodType: z.string().min(1, { message: "Blood Type is required" }),
  birthday: z.date({ message: "Birthday is required" }),
  sex: z.enum(["male", "female"], { message: "Sex is required" }),
  img: z.instanceof(File, { message: "Image is required!" }).optional(),
});

export type TeacherProps = z.infer<typeof Schema>;

export const TeacherDefaultValue: TeacherProps = {
  userName: "deanguerrero",
  email: "deanguerrero@gmail.com",
  password: "123123",
  firstName: "Dean",
  lastName: "Guerrero",
  phone: "+1 234 567 89",
  address: "1234 Main St, Anytown, USA",
  bloodType: "A+",
  birthday: new Date(),
  sex: "male",
  img: new File([], ""),
};

export const TeacherResolver: Resolver<TeacherProps> = zodResolver(Schema);
