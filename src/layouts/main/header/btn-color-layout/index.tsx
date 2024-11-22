import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Tooltip,
} from "@mantine/core";

import { SunDim, MoonStars } from "@phosphor-icons/react";
import cx from "clsx";
import classes from "./btncl.module.css";

export default function LayoutColor() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Tooltip
      label={computedColorScheme === "light" ? "modo oscuro" : "modo claro"}
    >
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="transparent"
        size="md"
        radius="md"
        c="inherit"
        aria-label="Settings"
        mx="10"
      >
        <SunDim className={cx(classes.light)} weight="duotone" size={44} />
        <MoonStars className={cx(classes.dark)} weight="duotone" size={44} />
      </ActionIcon>
    </Tooltip>
  );
}
