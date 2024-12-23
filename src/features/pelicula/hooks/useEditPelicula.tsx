import { notifications } from "@mantine/notifications";
import { Check } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { Pelicula } from "../entities/Pelicula";
import editPelicula from "../services/editPelicula";

export const useEditPelicula = () => {
  return useMutation({
    mutationFn: (pelicula: Pelicula) => {
      return editPelicula(pelicula);
    },
    onMutate() {
      // antes de la mutacion, podemos guardar los datos para roolback
      const id = notifications.show({
        loading: true,
        title: "Editar película",
        message: "Enviando solicitud al servidor",
        autoClose: false,
        withCloseButton: false,
      });

      // Retornar el ID para que esté disponible en `context`
      return { notificationId: id };
    },
    onError: (_error, _variables, context) => {
      //console.error(error);
      if (context?.notificationId) {
        notifications.update({
          id: context.notificationId,
          color: "red",
          title: "Editar película",
          message: "Error en la solicitud",
          loading: false,
          autoClose: 5000,
        });
      }
    },
    onSuccess: (_data, _variables, context) => {
      if (context?.notificationId) {
        notifications.update({
          id: context.notificationId,
          color: "teal",
          title: "Editar película",
          message: "Se agrego con éxito",
          icon: <Check />,
          loading: false,
          autoClose: 2000,
        });
      }
    },
    //onSettled: (data, error, variables, context) => { /// Error o éxito... ¡no importa!
    //},
  });
};
