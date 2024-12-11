import axios from "axios";
import { Pelicula } from "../entities/Pelicula";

export default async function editPelicula(pelicula: Pelicula) {
  return await axios
    .put(`http://localhost:5055/pelicula/${pelicula.id}`, pelicula)
    .then((res) => res.data);
}
