import "./NotFound.css";

function NotFound() {
  return (
    <section className="not-found">
      <h2 className="not-found__title">No se ha encontrado nada</h2>
      <p className="not-found__text">
        Prueba con otro equipo o borra el filtro para ver todos los partidos.
      </p>
    </section>
  );
}

export default NotFound;
