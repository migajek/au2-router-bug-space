import { route } from "@aurelia/router";

import { LocationView } from "./location-view";
import { List } from "./list";

@route({
  routes: [
    {path: '', redirectTo: 'list'},
   {path: 'list', component: List},
    {path: 'location/:id', id: 'view', component: LocationView},
  ]
})
export class Locations {
}