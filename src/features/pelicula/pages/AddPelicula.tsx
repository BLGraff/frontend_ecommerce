import {
  Button,
  Container,
  Group,
  NumberInput,
  Paper,
  Select,
  TextInput,
  Title,
} from "@mantine/core";

import { CurrencyDollar } from "@phosphor-icons/react";
//import { notifications } from "@mantine/notifications";
//import { Pelicula } from "../entities/Pelicula";

export function AddPelicula() {
  /*const handleSubmit = async (values: Pelicula) => {
    try {
      const id = notifications.show({
        loading: true,
        title: "Agregar película",
        message: "Enviando solicitud al servidor",
        autoClose: false,
        withCloseButton: false,
      });

      const response = await fetch("http://localhost:5055/pelicula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        notifications.update({
          id,
          color: "red",
          title: "Agregar película",
          message: "Error en la solicitud",
          loading: false,
          autoClose: 2000,
        });
      }

      form.reset();

      notifications.update({
        id,
        color: "teal",
        title: "Agregar película",
        message: "Se agrego con éxito",
        icon: <Check />,
        loading: false,
        autoClose: 2000,
      });
    } catch {
      notifications.show({
        color: "red",
        title: "Agregar película",
        message: "Se produjo un error",
      });
    }
  };*/

  return (
    <Container>
      <Title>Agregar película</Title>

      <Paper withBorder shadow="md" p={30} my={25} radius="md">
        <form>
          <TextInput required label="Título" placeholder="ingrese el título" />

          <NumberInput
            leftSection={<CurrencyDollar size={16} />}
            mt="md"
            required
            label="Precio"
            placeholder="ingrese el precio"
          />

          <TextInput
            mt="md"
            required
            label="Imagen"
            placeholder="ingrese url"
          />

          <Group justify="space-between">
            <Select
              mt="md"
              required
              label="Formato"
              placeholder="selecione el formato"
              data={["DVD", "BLUE_RAY", "CD"]}
            />
            <Select
              mt="md"
              required
              label="Condición"
              placeholder="selecione el condicion"
              data={["NUEVO", "USADO"]}
            />

            <Select
              mt="md"
              required
              label="Genero"
              placeholder="selecione el genero"
              data={["FEMENINO", "MASCULINO"]}
            />
          </Group>

          <TextInput
            mt="md"
            required
            label="Resumen"
            placeholder="ingrese resumen"
          />

          <Button type="submit" fullWidth mt="xl">
            AGREGAR
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
