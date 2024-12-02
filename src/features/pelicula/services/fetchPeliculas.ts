export default async function fetchPeliculas(query?: string) {
  return await fetch(`http://localhost:5055/pelicula?titulo=${query}`).then(
    (res) => res.json()
  );
}
