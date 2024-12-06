import { z } from "zod";

export interface Pelicula {
  id?: string;
  titulo: string;
  fechaSalida?: string;
  precio: number;
  imagen: string;
  rating: number;
  formato: string;
  condicion: string;
  genero: string;
  resumen: string;
}

export const peliculaSchema = z.object({
  id: z
    .string({
      required_error: "Id is required",
      invalid_type_error: "Id must be a string",
    })
    .optional(),
  //.uuid("El ID debe ser un UUID válido"),

  titulo: z
    .string({
      required_error: "titulo is required",
      invalid_type_error: "titulo must be a string",
    })
    .min(1, "El título es obligatorio"),
  fechaSalida: z
    .string({
      required_error: "fechaSalida is required",
      invalid_type_error: "fechaSalida must be a string",
    })
    .optional(),
  //refine((val) => !isNaN(Date.parse(val)), { message: "Fecha inválida" }),
  precio: z
    .number({
      required_error: "precio is required",
      invalid_type_error: "precio must be a number",
    })
    .min(0, "El precio no puede ser negativo"),
  imagen: z
    .string({
      required_error: "imagen is required",
      invalid_type_error: "imagen must be a string",
    })
    .url("La imagen debe ser una URL válida"),
  rating: z
    .number({
      required_error: "rating is required",
      invalid_type_error: "rating must be a string",
    })
    .min(0, "La calificación no puede ser menor que 0")
    .max(5, "La calificación no puede ser mayor que 5"),
  formato: z
    .string({
      required_error: "formato is required",
      invalid_type_error: "formato must be a string",
    })
    .min(1, "El formato es obligatorio"),
  condicion: z
    .string({
      required_error: "condicion is required",
      invalid_type_error: "condicion must be a string",
    })
    .min(1, "La condición es obligatoria"),
  genero: z
    .string({
      required_error: "genero is required",
      invalid_type_error: "genero must be a string",
    })
    .min(1, "El género es obligatorio"),
  resumen: z
    .string({
      required_error: "resumen is required",
      invalid_type_error: "resumen must be a string",
    })
    .min(10, "El resumen debe tener al menos 10 caracteres"),
});
