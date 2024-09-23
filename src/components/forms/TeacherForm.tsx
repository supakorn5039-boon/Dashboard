import { TeacherService } from "@/services/teacher.service";
import React from "react";
import InputField from "@/components/InputField";
import Image from "next/image";

type Props = {
  type: "create" | "update";
};

export default function TeacherForm({ type }: Props) {
  const { TeacherForm } = TeacherService();
  const errors = TeacherForm.formState.errors;

  const onSubmit = TeacherForm.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form action="" className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Teacher</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="userName"
          defaultValue={TeacherForm.watch("userName")}
          register={TeacherForm.register}
          error={errors.userName}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={TeacherForm.watch("email")}
          register={TeacherForm.register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={TeacherForm.watch("password")}
          register={TeacherForm.register}
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
          defaultValue={TeacherForm.watch("firstName")}
          register={TeacherForm.register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={TeacherForm.watch("lastName")}
          register={TeacherForm.register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={TeacherForm.watch("phone")}
          register={TeacherForm.register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={TeacherForm.watch("address")}
          register={TeacherForm.register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={TeacherForm.watch("bloodType")}
          register={TeacherForm.register}
          error={errors.bloodType}
        />
        <InputField
          label="Birth Day"
          name="birthday"
          type="date"
          defaultValue={TeacherForm.watch("birthday")}
          register={TeacherForm.register}
          error={errors.birthday}
        />

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...TeacherForm.register("sex")}
            defaultValue={TeacherForm.watch("sex")}
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
            {...TeacherForm.register("img")}
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
