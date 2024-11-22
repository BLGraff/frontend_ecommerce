import { Outlet } from "react-router-dom";
import { AppShell, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Footer } from "./footer";
import classes from "./root.module.css";
import Header from "./header";

/*export async function loader() {
  return null;
}*/

export function Component() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
        <Header opened={opened} open={toggle} />
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4} className={classes.navbar}>
        <UnstyledButton className={classes.control}>
          Notificaciones
        </UnstyledButton>
        <UnstyledButton className={classes.control}>
          Carrito de Compras
        </UnstyledButton>
        <UnstyledButton className={classes.control}>Usuario</UnstyledButton>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>

      <AppShell.Footer className={classes.footer}>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
