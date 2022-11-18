const FormRowSelect = ({
  labelText,
  name,
  value,
  handleChange,
  list,
  styles,
}) => {
  return (
    <div className={`form-row ${styles?.formRow}`}>
      <label htmlFor={name} className={`form-label  ${styles?.formLabel}`}>
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={handleChange}
        className={`form-select  ${styles?.select}`}
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
