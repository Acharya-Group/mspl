import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Notice {
  _id: string;
  title: string;
  link: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useNotice = () => {
  const queryClient = useQueryClient();

  // Get all notices
  const allNotices = useQuery<Notice[], Error>({
    queryKey: ["notices"],
    queryFn: async () => {
      const { data } = await api.get<{ message: string; notices: Notice[] }>(
        "/notice"
      );
      return data.notices;
    },
  });

  // Add new notice
  const addNotice = useMutation<void, Error, { title: string; link: string }>({
    mutationFn: ({ title, link }) => api.post("/notice", { title, link }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notices"],
      }),
  });

  // Delete notice
  const deleteNotice = useMutation<void, Error, string>({
    mutationFn: (id: string) => api.delete(`/notice/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notices"],
      }),
  });

  // Update notice
  const updateNotice = useMutation<
    void,
    Error,
    { id: string; title: string; link: string }
  >({
    mutationFn: ({ id, title, link }) => api.put(`/notice/${id}`, { title, link }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["notices"],
      }),
  });

  return { allNotices, addNotice, deleteNotice, updateNotice };
};
