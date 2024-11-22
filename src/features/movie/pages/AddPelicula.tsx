import { useForm } from "@mantine/form";
import { redirect } from "react-router-dom";

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

import { CurrencyDollar, Check } from "@phosphor-icons/react";
import { notifications } from "@mantine/notifications";
import { useAuth } from "react-oidc-context";

interface Pelicula {
  titulo: string;
  fechaSalida: string;
  precio: number;
  imagen: string;
  rating: number;
  formato: string;
  condicion: string;
  genero: string;
  resumen: string;
}

export function Component() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      titulo: "",
      fechaSalida: "2024-11-22",
      precio: 0.0,
      imagen: "",
      rating: 0,
      formato: "",
      condicion: "",
      genero: "",
      resumen: "",
    },

    validate: {
      //titulo: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalido titulo"),
    },
  });

  const auth = useAuth();
  const rol = auth.user?.profile.family_name;

  if (rol != "ADMIN") {
    return redirect("/");
  }

  const handleSubmit = async (values: Pelicula) => {
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
  };

  return (
    <Container>
      <Title>Agregar película</Title>

      <Paper withBorder shadow="md" p={30} my={25} radius="md">
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <TextInput
            required
            label="Título"
            placeholder="ingrese el título"
            key={form.key("titulo")}
            {...form.getInputProps("titulo")}
          />

          <NumberInput
            leftSection={<CurrencyDollar size={16} />}
            mt="md"
            required
            label="Precio"
            placeholder="ingrese el precio"
            key={form.key("precio")}
            {...form.getInputProps("precio")}
          />

          <TextInput
            mt="md"
            required
            label="Imagen"
            placeholder="ingrese url"
            key={form.key("imagen")}
            {...form.getInputProps("imagen")}
          />

          <Group justify="space-between">
            <Select
              mt="md"
              required
              label="Formato"
              placeholder="selecione el formato"
              data={["DVD", "BLUE_RAY", "CD"]}
              key={form.key("formato")}
              {...form.getInputProps("formato")}
            />
            <Select
              mt="md"
              required
              label="Condición"
              placeholder="selecione el condicion"
              data={["NUEVO", "USADO"]}
              key={form.key("condicion")}
              {...form.getInputProps("condicion")}
            />

            <Select
              mt="md"
              required
              label="Genero"
              placeholder="selecione el genero"
              data={["FEMENINO", "MASCULINO"]}
              key={form.key("genero")}
              {...form.getInputProps("genero")}
            />
          </Group>

          <TextInput
            mt="md"
            required
            label="Resumen"
            placeholder="ingrese resumen"
            key={form.key("resumen")}
            {...form.getInputProps("resumen")}
          />

          <Button type="submit" fullWidth mt="xl">
            AGREGAR
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

Component.displayName = "AddPelicula";
/**
 
 <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>



 */
