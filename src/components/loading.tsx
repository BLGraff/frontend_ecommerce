import { Center, Loader } from '@mantine/core';
// https://mantine.dev/core/loader/

interface Props {
  color?: string;
  size?: string;
  type?: string;
}

export default function LoadingScreen({ color = 'blue', size = 'md', type = 'oval' }: Props) {
  return (
    <Center h={200}>
      <Loader color={color} size={size} type={type} />
    </Center>
  );
}
