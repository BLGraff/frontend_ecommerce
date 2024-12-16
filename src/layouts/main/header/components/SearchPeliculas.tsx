import { ActionIcon, TextInput } from "@mantine/core";
import {
  ArrowRight,
  MagnifyingGlassPlus,
} from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SearchPeliculas = () => {
  const navigate = useNavigate();
  const [buscar, setBusqueda] = useState("");

  return (
    <TextInput
      autoFocus
      radius="xl"
      size="md"
      placeholder="Buscar película"
      rightSectionWidth={42}
      leftSection={<MagnifyingGlassPlus />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          variant="filled"
          color="#214478"
          onClick={() => navigate("/?q=" + buscar)}
        >
          <ArrowRight />
        </ActionIcon>
      }
      onChange={(event) => setBusqueda(event.currentTarget.value)}
    />
  );
};

export default React.memo(SearchPeliculas);
