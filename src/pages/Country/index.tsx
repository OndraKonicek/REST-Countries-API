import { useParams } from 'react-router-dom';
import { CountryTS } from '../../types/Country';
import * as S from './style';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { Link } from 'react-router-dom';
import { CountryDetail } from '../../components/CountryDetail';

export const Country = () => {

   const { name, code } = useParams()

   const [loading, setLoading] = useState(false)
   const [country, setCountry] = useState<CountryTS[]>([])

   useEffect(() => {
      if (name) {
         getCountry(name)
      } else if (code) {
         getCountry(code)
      }
   }, [name, code])

   const getCountry = async (param: string) => {
      setLoading(true)
      let country = name ? await api.getCountry(param) : await api.getCountryByCode(param)
      setCountry(country)
      console.log(country);
      setLoading(false);
   }

   return (
      <S.Country>
         <div className="container">
            <Link to="/" className='back--btn'>Back</Link>
            {loading &&
               <div className='loading'>Loading...</div>
            }
            {!loading &&
               country.map((item, i) => (
                  <CountryDetail
                     key={i}
                     flag={item.flags.png}
                     name={item.name.common}
                     nativeName={item.name.nativeName}
                     population={item.population}
                     region={item.region}
                     subregion={item.subregion}
                     capital={item.capital}
                     tld={item.tld}
                     currencies={item.currencies}
                     languages={item.languages}
                     borders={item.borders}
                  />
               ))
            }
         </div>
      </S.Country>
   )
}