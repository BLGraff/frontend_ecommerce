import { NavLink } from "react-router";
import { Eye, ChatCircleDots } from "@phosphor-icons/react";
import { Card, Text, Group, Center } from "@mantine/core";
import classes from "./card.module.css";
import { Pelicula } from "../../entities/Pelicula";

export default function CardPelicula({ pelicula }: { pelicula: Pelicula }) {
  return (
    <Card
      p="lg"
      shadow="lg"
      className={classes.card}
      radius="md"
      component={NavLink}
      to={`/pelicula/${pelicula.id}`}
    >
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${pelicula.imagen} )`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text size="lg" className={classes.title} fw={500}>
            {pelicula.titulo}
          </Text>

          <Group justify="space-between" gap="xs">
            <Text size="sm" className={classes.author}>
              ${pelicula.precio}
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
