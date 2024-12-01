import { useAuth } from "react-oidc-context";
import { Avatar, Menu, Group, Tooltip, NavLink } from "@mantine/core";
import { SignOut, Question, User } from "@phosphor-icons/react";

export default function CurrentUser() {
  const auth = useAuth();
  const apeynom = auth.user?.profile.name;

  return (
    <Menu
      withArrow
      offset={-5}
      transitionProps={{ transition: "slide-up", duration: 300 }}
    >
      <Menu.Target>
        <Tooltip label={apeynom}>
          <Group gap={7}>
            <Avatar
              src={apeynom}
              name={apeynom}
              radius="lg"
              variant="default"
              color="inherit"
              size="md"
              mx="10"
            />
          </Group>
        </Tooltip>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Ajustes</Menu.Label>
        <Menu.Item
          leftSection={<User size={20} color="var(--mantine-color-blue-6)" />}
        >
          Perfil
        </Menu.Item>

        <Menu.Divider />

        <Menu.Label>Sistema</Menu.Label>
        <Menu.Item
          leftSection={
            <Question size={20} color="var(--mantine-color-yellow-6)" />
          }
        >
          Ayuda
        </Menu.Item>

        <Menu.Divider />

        <NavLink
          label="SALIR"
          leftSection={<SignOut size={20} weight="bold" />}
          onClick={() => void auth.removeUser()}
        />
      </Menu.Dropdown>
    </Menu>
  );
}
