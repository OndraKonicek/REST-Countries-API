import * as S from './style';
import { Link } from 'react-router-dom';
import { CountryItemTS } from '../../types/CountryItem';

export const CountryItem = ({ name, population, region, capital, flag }: CountryItemTS) => {
   return (
      <S.CountryItem>
         <Link to={`/country/${name}`}>
            <div className="img--area">
               <img src={flag} alt={`Country flag: ${name}`} />
            </div>
            <div className="data--area">
               <p className="country--name">{name}</p>
               <p>Population: <span>{population}</span></p>
               <p>Region: <span>{region}</span></p>
               <p>Capital: <span>{capital}</span></p>
            </div>
         </Link>
      </S.CountryItem>
   )
}