import { Group, NumberInput, Select, TextInput } from "@mantine/core";
import { CurrencyDollar } from "@phosphor-icons/react";
import { Pelicula } from "../entities/Pelicula";

export default function PeliculaForm({ pelicula }: { pelicula?: Pelicula }) {
  return (
    <>
      <TextInput
        name="titulo"
        required
        label="Título"
        placeholder="ingrese el título"
        defaultValue={pelicula?.titulo}
      />

      <NumberInput
        name="precio"
        required
        label="Precio"
        leftSection={<CurrencyDollar size={16} />}
        mt="md"
        placeholder="ingrese el precio"
        defaultValue={pelicula?.precio}
      />

      <TextInput
        name="imagen"
        required
        label="Imagen"
        mt="md"
        placeholder="ingrese url"
        defaultValue={pelicula?.imagen}
      />

      <Group justify="space-between">
        <Select
          name="formato"
          required
          label="Formato"
          mt="md"
          placeholder="selecione el formato"
          data={["DVD", "BLUE_RAY", "CD"]}
          defaultValue={pelicula?.formato}
        />
        <Select
          name="condicion"
          required
          label="Condición"
          mt="md"
          placeholder="selecione el condicion"
          data={["NUEVO", "USADO"]}
          defaultValue={pelicula?.condicion}
        />

        <Select
          name="genero"
          required
          label="Genero"
          mt="md"
          placeholder="selecione el genero"
          data={["ACCION", "AVENTURA", "COMEDIA", "DRAMA", "TERROR", "ROMANCE"]}
          defaultValue={pelicula?.genero}
        />
      </Group>

      <TextInput
        name="resumen"
        required
        label="Resumen"
        mt="md"
        placeholder="ingrese resumen"
        defaultValue={pelicula?.resumen}
      />
    </>
  );
}
