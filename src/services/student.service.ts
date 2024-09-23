import { StudentDefaultValue, StudentResolver } from "@/dto/StudentDTO";
import { FormData } from "@/types/FormDataType";
import { useForm } from "react-hook-form";

export function StudentService() {
  const StudentForm = useForm<FormData>({
    defaultValues: StudentDefaultValue,
    resolver: StudentResolver,
  });

  return { StudentForm };
}
