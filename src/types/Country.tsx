export interface CountryTS {
   name: {
      common: string
      nativeName: [{ common: string }]
   }
   population: number,
   region: string,
   subregion: string,
   capital: [
      string
   ]
   flags: {
      png: string
   }
   tld: [
      string
   ],
   currencies: [
      {
         name: string
         symbol: string
      }
   ],
   languages: [
      string
   ],
   borders: [
      string
   ]
}