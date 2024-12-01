export default async function fetchPeliculas(query?: string) {
  console.log(query);
  return await fetch("http://localhost:5055/pelicula").then((res) =>
    res.json()
  );
}
