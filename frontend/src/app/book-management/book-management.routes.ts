import { Routes } from "@angular/router";
import { NewBookComponent } from "./components/new-book/new-book.component";
import { AuthGuard } from "../core/guards/auth.guard";

export const bookManagementRoutes: Routes = [ 
    {path : 'create', component : NewBookComponent, canActivate :[AuthGuard]}
   
];