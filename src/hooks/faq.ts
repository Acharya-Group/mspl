import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface Faq {
  _id: string;
  heading: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
}

export const useFaq = () => {
  const queryClient = useQueryClient();

  // ✅ Get all FAQs
  const allFaqs = useQuery<Faq[], Error>({
    queryKey: ["faqs"],
    queryFn: async () => {
      const { data } = await api.get<{ message: string; faqs: Faq[] }>("/faq");
      return data.faqs;
    },
  });

  // ✅ Add new FAQ
  const addFaq = useMutation<void, Error, { heading: string; description: string }>({
    mutationFn: ({ heading, description }) =>
      api.post("/faq", { heading, description }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      }),
  });

  // ✅ Delete FAQ
  const deleteFaq = useMutation<void, Error, string>({
    mutationFn: (id: string) => api.delete(`/faq/${id}`),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      }),
  });

  // ✅ Update FAQ
  const updateFaq = useMutation<
    void,
    Error,
    { id: string; heading: string; description: string }
  >({
    mutationFn: ({ id, heading, description }) =>
      api.put(`/faq/${id}`, { heading, description }),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["faqs"],
      }),
  });

  return { allFaqs, addFaq, deleteFaq, updateFaq };
};
