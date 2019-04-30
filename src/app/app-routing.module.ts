import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent},
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // register the apps root routes

        // Use the 'useHash' for web servers that don't return the index.html file
        // for 404 errors. Instead, the web server will see the '#' mark, and strip
        // away everything from the '#' and forward. They will therefore not return a
        // 404, and then bring the index.html file to the client. The client will still
        // have access to the other parameters, and then the Angular router will run
        // the proper component corresponding to the route.
        // RouterModule.forRoot(appRoutes, {useHash: true}) // register the apps root routes
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
