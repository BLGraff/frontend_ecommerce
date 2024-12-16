import { NavLink } from "react-router";
import { Eye, ChatCircleDots } from "@phosphor-icons/react";
import { Card, Text, Group, Center, ActionIcon } from "@mantine/core";
import { FilmReel } from "@phosphor-icons/react";
import classes from "./card.module.css";
import { Pelicula } from "../../entities/Pelicula";
import { useAuth } from "react-oidc-context";
import { ButtonAddCart } from "../../../venta/components/ButtonAddCart";

export default function CardPelicula({ pelicula }: { pelicula: Pelicula }) {
  const auth = useAuth();
  const rol = auth.user?.profile.family_name;

  return (
    <Card p="lg" shadow="lg" className={classes.card} radius="md">
      <div
        className={classes.image}
        style={{
          backgroundImage: `url(${pelicula.imagen} )`,
        }}
      />
      <div className={classes.overlay} />

      <div className={classes.content}>
        <div>
          <Text
            size="lg"
            className={classes.title}
            fw={500}
            c="rgba(255, 255, 255, 1)"
          >
            {pelicula.titulo}
          </Text>

          <Group>
            {pelicula.id ? <ButtonAddCart pelicula={pelicula} /> : null}

            {rol == "ADMIN" ? (
              <ActionIcon
                variant="outline"
                size="lg"
                color="cyan"
                aria-label="Gradient action icon"
                component={NavLink}
                to={`/pelicula/${pelicula.id}`}
              >
                <FilmReel style={{ width: "70%", height: "70%" }} />
              </ActionIcon>
            ) : null}
          </Group>

          <Group justify="space-between" gap="xs">
            <Text
              size="sm"
              className={classes.author}
              c="rgba(255, 255, 255, 1)"
            >
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
