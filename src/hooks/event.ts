import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/axios";

export interface EventType {
  _id: string;
  title: string;
  createdAt: string;
}

export const useEvent = () => {
  const queryClient = useQueryClient();

  // ✅ Fetch all events
  const allEvents = useQuery<EventType[], Error>({
    queryKey: ["events"],
    queryFn: async () => {
      const { data } = await api.get<{ events: EventType[] }>("/Event");
      // 🟢 Make sure to return the array itself
      return data.events || [];
    },
  });

  // ✅ Add new event
  const addEvent = useMutation<void, Error, { title: string }>({
    mutationFn: ({ title }) => api.post("/Event", { title }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
  });

  // ✅ Delete event
  const deleteEvent = useMutation<void, Error, string>({
    mutationFn: (id: string) => api.delete(`/Event/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
  });

  // ✅ Update event
  const updateEvent = useMutation<void, Error, { id: string; title: string }>({
    mutationFn: ({ id, title }) => api.put(`/Event/${id}`, { title }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
  });

  return { allEvents, addEvent, deleteEvent, updateEvent };
};
