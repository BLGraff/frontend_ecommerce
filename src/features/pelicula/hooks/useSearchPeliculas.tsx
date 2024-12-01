import { useQuery } from "@tanstack/react-query";
import fetchPeliculas from "../services/fetchPeliculas";

export const useSearchPelicula = (search?: string) => {
  return useQuery({
    queryKey: ["peliculas", search],
    queryFn: () => fetchPeliculas(search),
    enabled: !!search, // Solo se ejecuta si hay un término de búsqueda
    //staleTime: 1000 * 60, // Opcional: Datos en caché por 1 minuto
  });
};
