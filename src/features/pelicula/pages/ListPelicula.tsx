import { useSearchParams } from "react-router";
import { Grid, Container } from "@mantine/core";
import { Pelicula } from "../entities/Pelicula";
import LoadingScreen from "../../../components/loading";
import CardPelicula from "../components/CardPelicula";
import { useQuery } from "@tanstack/react-query";
import fetchPeliculas from "../services/fetchPeliculas";

export function ListPelicula() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";

  const { isPending, error, data } = useQuery({
    queryKey: ["peliculas", search],
    queryFn: () => fetchPeliculas(search),
  });

  if (isPending) return <LoadingScreen />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container fluid>
      <Grid grow gutter="lg">
        {data.map((peli: Pelicula, i: number) => (
          <Grid.Col span="content" key={i}>
            <CardPelicula pelicula={peli} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
