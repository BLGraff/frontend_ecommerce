import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router";
import { useAuth } from "react-oidc-context";
import { Burger } from "@mantine/core";
import { Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";
import { SignIn, ShoppingCart, Bell, FileVideo } from "@phosphor-icons/react";

import Logo from "../../../components/logo";
import LayoutColor from "./components/btn-color-layout";
import CurrentUser from "./components/current-user";
import SearchPeliculas from "./components/SearchPeliculas";

interface Props {
  opened: boolean;
  open: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Header({ opened, open }: Props) {
  const auth = useAuth();
  //console.log(auth);
  const rol = auth.user?.profile.family_name;

  return (
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={open} hiddenFrom="sm" size="sm" />

      <Group justify="space-between" style={{ flex: 1 }}>
        <Group ml="xl" gap={0} visibleFrom="sm">
          <Logo />
        </Group>

        <SearchPeliculas />

        <Group ml="xl" gap={0} visibleFrom="sm">
          <ActionIcon
            variant="transparent"
            size="lg"
            radius="md"
            c="inherit"
            mx="10"
          >
            <Bell style={{ width: "70%", height: "70%" }} weight="duotone" />
          </ActionIcon>

          <ActionIcon
            variant="transparent"
            size="lg"
            radius="md"
            c="inherit"
            mx="10"
          >
            <ShoppingCart
              style={{ width: "70%", height: "70%" }}
              weight="duotone"
            />
          </ActionIcon>

          <LayoutColor />

          {auth.isAuthenticated ? (
            <Fragment>
              {rol == "ADMIN" ? (
                <ActionIcon
                  variant="transparent"
                  size="lg"
                  radius="md"
                  c="inherit"
                  mx="10"
                  component={Link}
                  to="/pelicula"
                >
                  <FileVideo
                    style={{ width: "80%", height: "80%" }}
                    weight="duotone"
                  />
                </ActionIcon>
              ) : null}

              <CurrentUser />
            </Fragment>
          ) : (
            <ActionIcon
              variant="transparent"
              size="xl"
              radius="md"
              c="inherit"
              mx="10"
              onClick={() => void auth.signinRedirect()}
            >
              <SignIn style={{ width: "70%", height: "70%" }} />
            </ActionIcon>
          )}
        </Group>
      </Group>
    </Group>
  );
}
