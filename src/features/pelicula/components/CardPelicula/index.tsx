import { Link } from "react-router";
import { Eye, ChatCircleDots } from "@phosphor-icons/react";
import { Card, Text, Group, Center } from "@mantine/core";
import classes from "./card.module.css";

interface Props {
  id: string;
  urlImagen: string;
  titulo: string;
  precio: number;
}

export default function CardPelicula({ id, urlImagen, titulo, precio }: Props) {
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={Link}
      to={`/pelicula/${id}`}
      target="_blank"
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${urlImagen} )`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {titulo}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              ${precio}
            </Text>

            <Group gap="lg">
              <Center>
                <Eye />
                <Text size="sm" className={classes.bodyText}>
                  7847
                </Text>
              </Center>

              <Center>
                <ChatCircleDots />
                <Text size="sm" className={classes.bodyText}>
                  5
                </Text>
              </Center>
            </Group>
          </Group>
        </div>
      </div>
    </Card>
  );
}
