import { Container, Title } from "@mantine/core";
import { Button, Paper } from "@mantine/core";
import { notifications } from "@mantine/notifications";

import { z } from "zod";

import PeliculaForm from "../components/PeliculaForm";
import { useAddPelicula } from "../hooks/useAddPelicula";
import { Pelicula, peliculaSchema } from "../entities/Pelicula";

export function AddPelicula() {
  const mutation = useAddPelicula();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault(); // Evita el refresh de la página.

      const form = event.currentTarget; // Referencia al formulario.
      const formData = new FormData(form); // Extrae los datos del formulario.

      //const values = Object.fromEntries(formData.entries()); // Convierte los datos en un objeto.
      //const message = formData.get('message')?.toString() ?? ''

      const pelicula: Pelicula = peliculaSchema.parse({
        //id: "",
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

      form.reset(); // Resetea el formulario a sus valores iniciales.
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

  return (
    <Container>
      <Title>Agregar película</Title>

      <Paper withBorder shadow="md" p={30} my={25} radius="md">
        <form onSubmit={handleSubmit}>
          <PeliculaForm />
          <Button type="submit" fullWidth mt="xl" disabled={mutation.isPending}>
            {mutation.isPending ? "Agregando.." : "AGREGAR"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
