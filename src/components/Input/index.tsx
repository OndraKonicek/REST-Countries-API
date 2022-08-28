import { InputTS } from '../../types/Input';
import * as S from './style';

export const Input = ({ value, setSearch }: InputTS) => {
   return (
      <S.InputArea>
         <input
            type="text"
            placeholder='Search by Country'
            value={value}
            onChange={e => setSearch(e.target.value)}
         />
         <select onChange={e => setSearch(e.target.value)}>
            <option value="Filter by Region" disabled selected> Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
         </select>
      </S.InputArea>
   )
}