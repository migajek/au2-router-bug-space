import { route } from "@aurelia/router";
import { DeviceList } from "./device-list";
import { Device } from "./device";
import { Locations } from "./locations/locations";

@route({
  title: "Demo",
  routes: [
    {path: '', redirectTo: 'locations'},    
    {path: 'devices', id: 'device-list', component: DeviceList},
    {path: 'device/:id', id: 'device', component: Device},
    {path: 'locations', id: 'locations', component: Locations},
    
  ]
})
export class MyApp {
}
