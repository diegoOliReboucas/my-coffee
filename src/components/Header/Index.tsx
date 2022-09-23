import { NavLink } from 'react-router-dom';
import menu from '../../assets/headerMenu.png'
import pedidos from '../../assets/headerPedidos.png'
import usuario from '../../assets/usuario.png'
import themeDark from '../../assets/themeDark.png'
import themeLight from '../../assets/themeLight.png'
import { useAppSelector } from "../Redux/hooks/useAppSelector"
import { useDispatch } from "react-redux"
import { setTheme } from '../Redux/reducers/darkReducer';
import * as C from  './Styled'

export const Header = () => {
  const theme = useAppSelector(state => state.theme)
  const dispatch = useDispatch()

  const changeTheme = () => {
    if(theme.dark){
      dispatch(setTheme(false))
    }else {
      dispatch(setTheme(true))
    }
    console.log(theme.dark);
    
  }

  return (
    <C.headerMain>
      <C.DarkLight onClick={changeTheme}> <img src={theme.dark ? themeLight : themeDark} alt="" /> </C.DarkLight>
      <C.navMain dark={theme.dark}>
        <ul>
      <li>
        <NavLink to="/" end><img src={menu} alt="Menu" /></NavLink>
      </li>
      <li>
        <NavLink to="pedidos"><img src={pedidos} alt="Pedidos" /></NavLink>
      </li>
      <li>
        <NavLink to="usuario" end><img src={usuario} alt="Usuario" /></NavLink>
      </li>
       </ul>
      </C.navMain>
    </C.headerMain>
    
  )
}