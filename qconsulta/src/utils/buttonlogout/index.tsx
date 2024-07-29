import { useNavigate } from 'react-router-dom';
import './style.css'
export const ButtonLogout = ({children}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <button onClick={handleLogout}>
    <span className="box">
      {children}
    </span>
</button>
  )
}