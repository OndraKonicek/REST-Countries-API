import styled from "styled-components";

export const CountryItem = styled.div`
background-color: #FFF;
border-radius: 5px;
box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);

a {
   text-decoration: none;
   color: #000;
}

.img--area {
   img {
      width: 100%;
      height: 150px;
      border-top-left-radius: 5px;  
      border-top-right-radius: 5px;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
   }
}

.data--area {
   padding: 10px 20px;
   p {
      font-size: 14px;
      font-weight: 600;
      margin: 7px 0px;
      span {
         font-weight: 400;
      }
   }
   .country--name {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 15px;
   }
}
`