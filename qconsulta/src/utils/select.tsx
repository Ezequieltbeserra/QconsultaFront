import './cssSelect.css'
export const Selected = () => {

  return (
    <div className="radio-input">
  <label className="label">
    <input
      type="radio"
      id="value-1"
      name="value-radio"
      value="value-1"
    />
    <p className="text">Administrador</p>
  </label>
  <label className="label">
    <input type="radio" id="value-2" name="value-radio" value="value-2" />
    <p className="text">Comercial</p>
  </label>
  <label className="label">
    <input type="radio" id="value-3" name="value-radio" value="value-3" />
    <p className="text">Back-Office</p>
  </label>
</div>

  )
}