import { Container, Title, Text, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { Illustration } from './Illustration';
import classes from './404.module.css';

export default function NotFound() {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Nada que ver aqui</Title>
          <Text c="dimmed" size="lg" ta="center" className={classes.description}>
            La página que intentas abrir no existe. Es posible que hayas escrito mal la dirección o
            que la página se haya movido a otra URL. Si crees que se trata de un error, ponte en
            contacto con el servicio de asistencia.
          </Text>
          <Group justify="center">
            <Button size="md" component={Link} to="/">
              Llévame de vuelta a la página de inicio
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
