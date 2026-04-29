import PropTypes from "prop-types"

/**
 * SearchBar - Input de búsqueda con limpieza
 *
 * Props:
 * @param {string}   value       - Valor actual del input
 * @param {function} onChange    - Callback al cambiar el valor
 * @param {string}   placeholder - Placeholder del input
 */
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
      {value && (
        <button className="search-clear" onClick={() => onChange("")}>
          ✕
        </button>
      )}
    </div>
  )
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

SearchBar.defaultProps = {
  placeholder: "Buscar...",
}