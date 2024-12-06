export default async function fetchPelicula(id?: string) {
  return await fetch(`http://localhost:5055/pelicula/${id}`).then((res) =>
    res.json()
  );
}
