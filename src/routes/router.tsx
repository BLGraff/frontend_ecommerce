import { Route, Routes } from "react-router";
import { Layout } from "../layouts/main";
import {
  ListPelicula,
  AddPelicula,
  EditPelicula,
} from "../features/pelicula/pages";
import { ShoppingCart } from "../features/venta/pages/ShoppingCart";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path=":q?" element={<ListPelicula />} />
        <Route path="pelicula" element={<AddPelicula />} />
        <Route path="pelicula/:pid" element={<EditPelicula />} />

        <Route path="cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}
