import * as S from './style';

export const Input = () => {
   return (
      <S.InputArea>
         <input
            type="text"
            placeholder='Search by Country'
         />
         {/* <select>
            <option value="Filter by Region" disabled selected> Filter by Region</option>
         </select> */}

      </S.InputArea>
   )
}