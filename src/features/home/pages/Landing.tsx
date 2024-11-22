import { Grid, Container } from "@mantine/core";
import CardPelicula from "../components/CardPelicula";
import { useQuery } from "@tanstack/react-query";
import LoadingScreen from "../../../components/loading";

interface Pelicula {
  titulo: string;
  fechaSalida: string;
  precio: number;
  imagen: string;
  rating: number;
  formato: string;
  condicion: string;
  genero: string;
  resumen: string;
}

export function Component() {
  const { isPending, error, data } = useQuery({
    queryKey: ["peliculas"],
    queryFn: async () =>
      await fetch("http://localhost:5055/pelicula").then((res) => res.json()),
  });

  if (isPending) return <LoadingScreen />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container fluid>
      <Grid grow gutter="lg">
        {data.map((pelicula: Pelicula, i: number) => (
          <Grid.Col span="content" key={i}>
            <CardPelicula
              id="buscar_id"
              urlImagen={pelicula.imagen}
              titulo={pelicula.titulo}
              precio={pelicula.precio}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

Component.displayName = "Landing";
