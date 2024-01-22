import { lazy } from "react";
import { Loading } from "./Loading/Loading";
import { Layout } from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
// import {GlobalStyle} from "./GlobalStyle";


const HomePage=lazy(()=>import('../page/Home'));
const CarsCatalogPage=lazy(()=>import('../page/CarsCatalog'));
const CarsFavoritesPage=lazy(()=>import('../page/CarsFavorites'));


export const App = () => {
  return (
// (<Loading/>):
<>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<HomePage/>}/>
  <Route path="catalog" element={<CarsCatalogPage/>}/>
  <Route path="favorites" element={<CarsFavoritesPage/>}/>
  <Route path="*" element={<HomePage/>} />
  </Route>
    
</Routes>
{/* <GlobalStyle /> */}
</>





    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
