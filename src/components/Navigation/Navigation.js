import { NavigationLink } from "./Navigation.styled"

export const Navigation = () =>{
 return(
   <nav>
        
        <NavigationLink to="/">Home</NavigationLink>
        <NavigationLink to="/catalog">Catalog</NavigationLink>
        <NavigationLink to="/favorites">Favorites</NavigationLink>
    </nav>
)
    
}