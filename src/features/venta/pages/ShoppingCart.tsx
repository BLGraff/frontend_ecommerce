import { Button, Container, Group, Title } from "@mantine/core";
import { Paper } from "@mantine/core";

import { useAuth } from "react-oidc-context";
import { useCartStore } from "../store/carrito";
import CardItem from "./CardItem";
import { Item } from "../entities/Item";

export function ShoppingCart() {
  const { items, getMontoTotal } = useCartStore();
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return auth.signinRedirect();
  }

  return (
    <Container mb="xl">
      <Title>Carro de compras</Title>

      <Paper withBorder shadow="md" p={30} my={25} radius="md">
        {items.map((item: Item, i: number) => (
          <CardItem item={item} key={i} />
        ))}
      </Paper>

      <Group justify="space-between">
        <Title order={2}>Total: ${getMontoTotal()} </Title>
        <Button color="#214478">FINALIZAR COMPRA</Button>
      </Group>
    </Container>
  );
}
