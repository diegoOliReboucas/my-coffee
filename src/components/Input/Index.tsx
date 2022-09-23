import { CSSProperties } from 'styled-components'
import * as C from './Styled'

type propsInput = {
  id: string,
  label: string,
  type: string,
  style?: CSSProperties,
  value?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  required?: boolean
}
export const Input = ({id, label, type, style, value, onChange, required}: propsInput) => {
  return (
    <C.Main>
      <label htmlFor={id}>{label}</label>
      <input style={style} id={id} type={type} value={value} onChange={onChange} required={required}/>
    </C.Main>
  )
}