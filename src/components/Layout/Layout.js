import { GlobalContainer } from './Layout.styled';
import {Outlet} from 'react-router-dom';
import { Suspense } from 'react';
import { Loading } from 'components/Loading/Loading';
import {AppBar} from '../AppBar/AppBar';

export const Layout=()=>{
    return (
  <GlobalContainer>
    <AppBar/>
    <Suspense fallback={<Loading/>}>
    <Outlet/>
    </Suspense>
    
  </GlobalContainer>
    )
}