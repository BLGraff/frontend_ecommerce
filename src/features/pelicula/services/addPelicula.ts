import axios from "axios";
import { Pelicula } from "../entities/Pelicula";

export default async function addPelicula(pelicula: Pelicula) {
  return await axios
    .post("http://localhost:5055/pelicula", pelicula)
    .then((res) => res.data);
}
