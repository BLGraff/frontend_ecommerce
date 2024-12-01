import { useSearchParams } from "react-router";
import { Grid, Container } from "@mantine/core";
import { Pelicula } from "../entities/Pelicula";
import LoadingScreen from "../../../components/loading";
import CardPelicula from "../components/CardPelicula";
import { useSearchPelicula } from "../hooks/useSearchPeliculas";
//import fetchPeliculas from "../services/fetchPeliculas";
//import { useQuery } from "@tanstack/react-query";

export function ListPelicula() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "all";

  const { isPending, error, data } = useSearchPelicula(search);

  /*const { isPending, error, data } = useQuery({
    queryKey: ["peliculas"],
    queryFn: () => fetchPeliculas(search),
    //enabled: !!search, // Solo se ejecuta si hay un término de búsqueda
    //staleTime: 1000 * 60, // Opcional: Datos en caché por 1 minuto
  });*/

  if (isPending) return <LoadingScreen />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container fluid>
      {search}
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
