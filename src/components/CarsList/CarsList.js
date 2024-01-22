import { CarCard } from "components/CarCard/CarCard";

export const CarsList=()=>{
const cars=[
    {
    id:1,
    name:"audi"}, 
    {
    id:2,
    name:"volvo"},
    {
    id:3,
    name:"ford"}
];
    return (
        <>
        <ul>
        {cars.map(({id,name})=>(
           <li key={id}>
            <CarCard name={name}/>
           </li> 
        ))}
        </ul>
        </>
    )

    

}