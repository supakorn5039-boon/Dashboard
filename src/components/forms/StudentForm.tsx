import React from "react";
import InputField from "@/components/InputField";
import Image from "next/image";
import { StudentService } from "@/services/student.service";

type Props = {
  type: "create" | "update";
};

export default function StudentForm({ type }: Props) {
  const { StudentForm } = StudentService();
  const errors = StudentForm.formState.errors;

  const onSubmit = StudentForm.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="userName"
          defaultValue={StudentForm.watch("userName")}
          register={StudentForm.register}
          error={errors.userName}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={StudentForm.watch("email")}
          register={StudentForm.register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={StudentForm.watch("password")}
          register={StudentForm.register}
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={StudentForm.watch("firstName")}
          register={StudentForm.register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={StudentForm.watch("lastName")}
          register={StudentForm.register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={StudentForm.watch("phone")}
          register={StudentForm.register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={StudentForm.watch("address")}
          register={StudentForm.register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={StudentForm.watch("bloodType")}
          register={StudentForm.register}
          error={errors.bloodType}
        />
        <InputField
          label="Birth Day"
          name="birthday"
          type="date"
          defaultValue={StudentForm.watch("birthday")}
          register={StudentForm.register}
          error={errors.birthday}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...StudentForm.register("sex")}
            defaultValue={StudentForm.watch("sex")}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input
            id="img"
            type="file"
            {...StudentForm.register("img")}
            className="hidden"
          />
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-sm">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
}
