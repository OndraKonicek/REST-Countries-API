export interface CountryDetailTS {
   name: string
   // nativeName: string
   nativeName: [{
      common: string
   }]
   population: number,
   region: string,
   subregion: string,
   capital: [
      string
   ]
   flag: string,
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