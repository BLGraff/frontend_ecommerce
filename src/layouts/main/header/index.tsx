import { Link } from "react-router-dom";
import { TextInput, Burger } from "@mantine/core";
import { Group } from "@mantine/core";
import { ActionIcon } from "@mantine/core";

import Logo from "../../../components/logo";
import LayoutColor from "./btn-color-layout";
import CurrentUser from "./current-user";
import {
  MagnifyingGlass,
  SignIn,
  ShoppingCart,
  Bell,
  ArrowRight,
  FileVideo,
} from "@phosphor-icons/react";
import { useAuth } from "react-oidc-context";
import { Fragment } from "react/jsx-runtime";

//import classes from "./header.module.css";

interface Props {
  opened: boolean;
  open: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function Header({ opened, open }: Props) {
  const auth = useAuth();
  const rol = auth.user?.profile.family_name;

  return (
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={open} hiddenFrom="sm" size="sm" />

      <Group justify="space-between" style={{ flex: 1 }}>
        <Group ml="xl" gap={0} visibleFrom="sm">
          <Logo />
        </Group>

        <TextInput
          radius="xl"
          size="md"
          placeholder="Buscar película"
          rightSectionWidth={42}
          leftSection={<MagnifyingGlass />}
          rightSection={
            <ActionIcon size={32} radius="xl" variant="filled" color="#214478">
              <ArrowRight />
            </ActionIcon>
          }
        />

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
