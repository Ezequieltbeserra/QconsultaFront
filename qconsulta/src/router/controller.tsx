import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Consultas from "../pages/consultas";
import Information from "../pages/infoconsultaCida";
import { Administrador } from "../pages/administrador";
import InformationTop from "../pages/infoConsultaTop";


const PrivateRoute = ({ element, path }: any) => {
  const tempo = localStorage.getItem('tempologado');

  if (!tempo) {
    return <Navigate to="/login" replace />;
  }

  try {

    const currentTime = Math.floor(Date.now() / 1000);
    if (parseFloat(tempo) < currentTime) {
      return <Navigate to="/login" replace />;
    }

    return <>{element}</>;
  } catch (error) {
    console.error('Erro ao decodificar o token:', error);
    return <Navigate to="/login" replace />;
  }
};


export const router = createBrowserRouter([
  {
    path: "/login",
    element: <App/>
  },
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/consulta",
    element: <PrivateRoute element={<Consultas/> }/>
  },
  {
    path: "/infoconsulta",
    element: <PrivateRoute element={<Information/>}/>
  },
  {
    path: "/administrador",
    element: <PrivateRoute element={<Administrador/>}/>
  },
  {
    path : "/infoconsultatop",
    element: <PrivateRoute element={<InformationTop/>}/>
  }
]);