import { useFormContext } from "react-hook-form";
import './cssSelect.css';

export const Selected = () => {
  const { register } = useFormContext();

  return (
    <div className="radio-input">
      <label className="label">
        <input
          type="radio"
          id="value-1"
          name="role"
          value="Administrador"
          {...register('role')}
        />
        <p className="text">Administrador</p>
      </label>
      <label className="label">
        <input 
          type="radio" 
          id="value-2" 
          name="role" 
          value="Comercial" 
          {...register('role')}
        />
        <p className="text">Comercial</p>
      </label>
      <label className="label">
        <input 
          type="radio" 
          id="value-3" 
          name="role" 
          value="Back-office" 
          {...register('role')}
        />
        <p className="text">Back-Office</p>
      </label>
    </div>
  );
};
