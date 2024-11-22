import { Center, Text, Anchor } from "@mantine/core";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <Center>
      <Text fz="sm" c="dimmed" ta="center">
        Copyright ©{" "}
        <Anchor fz="inherit" component={NavLink} to="https://blgsoft.com.ar">
          BLGSoft
        </Anchor>
        {" - "}
        {new Date().getFullYear()}
      </Text>
    </Center>
  );
}
