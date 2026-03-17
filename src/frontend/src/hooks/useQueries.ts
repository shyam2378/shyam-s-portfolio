import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitForm() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      name,
      email,
      message,
    }: {
      name: string;
      email: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitForm(name, email, message);
    },
  });
}
