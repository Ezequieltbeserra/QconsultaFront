import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Consultas from "../pages/consultas";
import Information from "../pages/infoconsulta";
import { Administrador } from "../pages/administrador";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/consulta",
    element: <Consultas/> 
  },
  {
    path: "/infoconsulta",
    element: <Information/>
  },
  {
    path: "/administrador",
    element: <Administrador/>
  }
]);