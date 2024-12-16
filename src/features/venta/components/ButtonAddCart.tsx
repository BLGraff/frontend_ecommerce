import { ActionIcon } from "@mantine/core";
import { ShoppingCart } from "@phosphor-icons/react";
import { useCartStore } from "../store/carrito";
import { Pelicula } from "../../pelicula/entities/Pelicula";
import { CartStore } from "../entities/CartStore";

function handleSubmit(pelicula: Pelicula, cartStore: CartStore) {
  const existeItem = cartStore.items.findIndex(
    (item) => item.idItem === pelicula.id
  );

  if (existeItem !== -1) {
    cartStore.items[existeItem].cantidad += 1;
    cartStore.items[existeItem].monto += pelicula.precio;
  } else {
    if (!pelicula.id) {
      throw new Error("No tiene id la pelicula");
    }

    cartStore.addItem({
      idItem: pelicula.id,
      title: pelicula.titulo,
      cantidad: 1,
      precio: pelicula.precio,
      monto: pelicula.precio,
    });
  }
}

export function ButtonAddCart({ pelicula }: { pelicula: Pelicula }) {
  const cartStore = useCartStore();

  return (
    <ActionIcon
      variant="outline"
      size="lg"
      color="teal"
      aria-label="Gradient action icon"
      onClick={() => handleSubmit(pelicula, cartStore)}
    >
      <ShoppingCart style={{ width: "70%", height: "70%" }} />
    </ActionIcon>
  );
}
