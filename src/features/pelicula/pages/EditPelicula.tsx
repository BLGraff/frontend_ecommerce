import { Container, Title } from "@mantine/core";
import { Button, Paper } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useAuth } from "react-oidc-context";
import { z } from "zod";

import PeliculaForm from "../components/PeliculaForm";
import { useEditPelicula } from "../hooks/useEditPelicula";
import { Pelicula, peliculaSchema } from "../entities/Pelicula";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import fetchPelicula from "../services/fetchPelicula";
import LoadingScreen from "../../../components/loading";

export function EditPelicula() {
  const auth = useAuth();
  const { pid } = useParams();

  //console.log(pid);
  const { isLoading, isRefetching, error, data } = useQuery({
    queryKey: ["pelicula"],
    queryFn: () => fetchPelicula(pid),
  });

  const mutation = useEditPelicula();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      const form = event.currentTarget; // Referencia al formulario.
      const formData = new FormData(form); // Extrae los datos del formulario.

      //const values = Object.fromEntries(formData.entries()); // Convierte los datos en un objeto.
      //const message = formData.get('message')?.toString() ?? ''

      const pelicula: Pelicula = peliculaSchema.parse({
        id: pid,
        titulo: formData.get("titulo")?.toString() ?? "",
        //fechaSalida: "05/12/2024",
        precio: parseInt(formData.get("precio")?.toString() ?? "", 10),
        imagen: formData.get("imagen")?.toString() ?? "",
        rating: 0,
        formato: formData.get("formato")?.toString() ?? "",
        condicion: formData.get("condicion")?.toString() ?? "",
        genero: formData.get("genero")?.toString() ?? "",
        resumen: formData.get("resumen")?.toString() ?? "",
      });

      mutation.mutate(pelicula);
      form.reset();
    } catch (error) {
      if (error instanceof z.ZodError) {
        //console.error("Errores de validación:", error.errors);

        error.errors.forEach((e) => {
          notifications.show({
            title: "Error al agregar película",
            message: e.message,
            color: "red",
          });
        });
      } else {
        notifications.show({
          title: "Error al agregar película",
          message: "Error inesperado",
          color: "red",
        });
        console.error("Error inesperado:", error);
      }
    }
  };

  if (isLoading || isRefetching) {
    return <LoadingScreen />;
  }

  if (error) {
    //ir al login

    auth.signinRedirect();
    //return "An error has occurred: " + error.message
  }

  //console.log(data);
  return (
    <Container>
      <Title>Editar película</Title>
      <Paper withBorder shadow="md" p={30} my={25} radius="md">
        <form onSubmit={handleSubmit}>
          <PeliculaForm pelicula={data} />
          <Button type="submit" fullWidth mt="xl" disabled={mutation.isPending}>
            {mutation.isPending ? "Editando.." : "APLICAR CAMBIOS"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
