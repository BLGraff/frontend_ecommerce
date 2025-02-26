import { Text, Group, ActionIcon, Tooltip } from "@mantine/core";
import classes from "./card.module.css";
import { Item } from "../../entities/Item";
import { Trash } from "@phosphor-icons/react";
import { useCartStore } from "../../store/carrito";

export default function CardItem({ item }: { item: Item }) {
  const { removeItem } = useCartStore();
  return (
    <Group
      justify="space-between"
      className={classes.item}
      wrap="nowrap"
      gap="xl"
      key={item.title}
    >
      <div>
        <Text>{item.title}</Text>
        <Text size="md" c="dimmed">
          ${item.precio} X {item.cantidad} = ${item.monto}
        </Text>
      </div>

      <Tooltip label="Eliminar del Carro">
        <ActionIcon
          variant="transparent"
          size="lg"
          onClick={() => removeItem(item)}
        >
          <Trash style={{ width: "70%", height: "70%" }} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
