import { TeacherDefaultValue, TeacherResolver } from "@/dto/TeacherDTO";
import { FormData } from "@/types/FormDataType";

import { useForm } from "react-hook-form";

export function TeacherService() {
  const TeacherForm = useForm<FormData>({
    defaultValues: TeacherDefaultValue,
    resolver: TeacherResolver,
  });

  return { TeacherForm };
}
