import { notifications } from "@mantine/notifications";
import { Check } from "@phosphor-icons/react";
import { useMutation } from "@tanstack/react-query";
import { Pelicula } from "../entities/Pelicula";

export const useAddPelicula = () => {
  return useMutation({
    mutationFn: (pelicula: Pelicula) => {
      //console.log(pelicula);
      //return axios.post('/todos', newTodo)
      return fetch("http://localhost:5055/pelicula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pelicula),
      });
    },
    onMutate() {
      // antes de la mutacion, podemos guardar los datos para roolback
      const id = notifications.show({
        loading: true,
        title: "Agregar película",
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
          title: "Agregar película",
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
          title: "Agregar película",
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
