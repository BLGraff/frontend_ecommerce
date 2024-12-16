import axios from "axios";

export default async function fetchPelicula(id?: string) {
  return await axios
    .get(`http://localhost:5055/pelicula/${id}`)
    .then((res) => res.data);
}
