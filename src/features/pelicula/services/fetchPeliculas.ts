import axios from "axios";

export default async function fetchPeliculas(query?: string) {
  return await axios
    .get(`http://localhost:5055/pelicula/public?titulo=${query}`)
    .then((res) => res.data);
}
