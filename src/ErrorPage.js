import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();
  function irParaOutraPagina() {
    navigate("/");
  }
  return (
    <div className="container">
      <p className="h1 text-danger">Oops!</p>
      <p>Houve um erro de rota</p>
      <button className="btn btn-primary" onClick={irParaOutraPagina}>
        Voltar
      </button>
    </div>
  );
}
