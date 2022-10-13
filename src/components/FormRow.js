const FormRow = ({ type, name, value, handleChange, labelText, styles }) => {
  return (
    <div className={`form-row ${styles?.formRow}`}>
      <label htmlFor={name} className={`form-label  ${styles?.formLabel}`}>
        {labelText || name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className={`form-input  ${styles?.formInput}`}
      />
    </div>
  );
};
export default FormRow;
