import { Center, Image } from "@mantine/core";
import { Link } from "react-router-dom";
import logoApp from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <Center>
      <Link to="/">
        <Image radius="md" h={25} w="auto" fallbackSrc={logoApp} src={null} />
      </Link>
    </Center>
  );
}
