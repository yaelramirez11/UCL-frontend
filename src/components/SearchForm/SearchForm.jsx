import "./SearchForm.css";

function SearchForm({ value, onChange, onSubmit }) {
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <label className="search-form__label" htmlFor="team-search">
        Buscar equipo
      </label>
      <input
        className="search-form__input"
        id="team-search"
        type="text"
        name="team"
        placeholder="Ej. Real Madrid"
        value={value}
        onChange={onChange}
      />
      <button className="search-form__button" type="submit">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;
