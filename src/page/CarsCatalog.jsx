import { CarsList } from "components/CarsList/CarsList";
import {CarsForm} from "components/CarsForm/CarsForm";
import {LoadMore} from "components/LoadMore/LoadMore";

export default function CarsCatalog() {
    return (
    <>
    <CarsForm/>
    <CarsList/>
    <LoadMore/>
    </>
    
    )
      
    ;
  }