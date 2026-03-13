import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createJournal,
  getUserJournals,
  analyzeJournal,
  getInsights
} from "../api/journal.api";

export const useJournals = (userId) => {
  return useQuery({
    queryKey: ["journals", userId],
    queryFn: () => getUserJournals(userId),
    enabled: !!userId, 
  });
};

export const useCreateJournal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createJournal,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["journals"]
      });
      queryClient.invalidateQueries({
        queryKey: ["insights"]
      });
    }
  });
};

export const useAnalyzeJournal = () => {
  return useMutation({
    mutationFn: analyzeJournal
  });
};

export const useInsights = (userId) => {
  return useQuery({
    queryKey: ["insights", userId],
    queryFn: () => getInsights(userId),
    enabled: !!userId, 
  });
};