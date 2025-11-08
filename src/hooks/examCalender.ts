import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

// ✅ Exam Interface (matches your schema)
export interface Exam {
  _id: string;
  level: string;
  examDate: string;
  registrationDeadline: string;
  mode: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useExamCalendar = () => {
  const queryClient = useQueryClient();

  // ✅ Get all Exams
  const allExams = useQuery<Exam[], Error>({
    queryKey: ["examCalendar"],
    queryFn: async () => {
      const { data } = await api.get<{ message: string; exams: Exam[] }>("/ExamCalender");
      return data.exams;
    },
  });

  // ✅ Add new Exam
  const addExam = useMutation<
    void,
    Error,
    { level: string; examDate: string; registrationDeadline: string; mode: string }
  >({
    mutationFn: ({ level, examDate, registrationDeadline, mode }) =>
      api.post("/ExamCalender", { level, examDate, registrationDeadline, mode }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["examCalendar"],
      }),
  });

  // ✅ Delete Exam
  const deleteExam = useMutation<void, Error, string>({
    mutationFn: (id: string) => api.delete(`/ExamCalender/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["examCalendar"],
      }),
  });

  // ✅ Update Exam
  const updateExam = useMutation<
    void,
    Error,
    { id: string; level: string; examDate: string; registrationDeadline: string; mode: string }
  >({
    mutationFn: ({ id, level, examDate, registrationDeadline, mode }) =>
      api.put(`/ExamCalender/${id}`, { level, examDate, registrationDeadline, mode }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["examCalendar"],
      }),
  });

  return { allExams, addExam, deleteExam, updateExam };
};
