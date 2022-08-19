import * as S from './style';
import { useEffect, useState } from 'react';
import { api } from '../../api';
import { Input } from "../../components/Input"
import { CountriesTS } from '../../types/Countries';
import { CountryItem } from '../../components/CountryItem';

export const Countries = () => {
   const [countries, setCountries] = useState<CountriesTS[]>([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      getAllCountries()
   }, [])

   const getAllCountries = async () => {
      setLoading(true)
      let countries = await api.getCountries()
      console.log(countries);
      setCountries(countries)
      setLoading(false)
   }

   return (
      <S.Countries>
         <Input />
         <div className="countries">
            {loading &&
               <div className='loading'>Loading...</div>
            }
            {!loading &&
               countries.map((item, i) => (
                  <CountryItem
                     key={i}
                     name={item.name.common}
                     population={item.population}
                     region={item.region}
                     capital={item.capital}
                     flag={item.flags.png}
                  />
               ))
            }
         </div>
      </S.Countries>
   )
}