import * as S from './style'
import { Link } from 'react-router-dom'
import { CountryDetailTS } from '../../types/CountryDetail'

export const CountryDetail = ({ name, nativeName, population, region, subregion, capital, tld, currencies, languages, borders, flag }: CountryDetailTS) => {

   return (
      <S.CountryData>
         <img src={flag} alt={`Country flag: ${name}`} />
         <div className="data--area">
            <h1>{name}</h1>
            <div className='data--firstArea'>

               {nativeName &&
                  <p>Native Name: {Object.values(nativeName).map((item) => (
                     <span>{item.common}</span>
                  ))}</p>
               }

               <p>Population: <span>{population}</span></p>
               <p>Region: <span>{region}</span></p>
               <p>Subregion: <span>{subregion}</span></p>
               <p>Capital: <span>{capital}</span></p>
               <p className='topLevelDomain'>Top Level Domain: <span>{tld}</span></p>

               {currencies &&
                  <p>Currencies: {Object.values(currencies).map((item) => (
                     <>
                        <span>{item.symbol}</span>
                        <span>{item.name}</span>
                     </>
                  ))}</p>
               }

               <p>Languages: <span className='language'>{Object.values(languages)}</span></p>

            </div>
            {borders &&
               <div className="border--area">
                  <p>Border Countries: </p>
                  <div className="borders">
                     {borders.map((item, index) => <Link to={`/code/${item}`} key={index}>{item}</Link>)}
                  </div>
               </div>
            }
         </div>
      </S.CountryData>
   )
}