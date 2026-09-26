import "./About.css";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">Sobre el proyecto</h2>
      <p className="about__text">
        UCL Pulse es una aplicación de front-end que muestra datos de la
        Champions League. Los partidos vendrán de football-data.org. En esta
        etapa usamos datos de ejemplo.
      </p>
    </section>
  );
}

export default About;
