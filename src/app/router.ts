//Routing is used for connecting multiple components
import{ Routes} from "@angular/router";
import { SignupComponent} from "./signup/signup.component";
import { LoginComponent}from "./login/login.component";
import{ CartComponent}from "./cart/cart.component";
import { from } from "rxjs";
import{SidemenComponent}from "./sidemen/sidemen.component";

export const appRoute:Routes = [
    {
        path:"signup",
        component:SignupComponent
        
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"cart",
        component:CartComponent
    },
    {
        path:"sidemen",
        component:SidemenComponent
    }
]