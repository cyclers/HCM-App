import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { PdmComponent } from "./pdm/pdm.component";
import { BrowseComponent } from "./pdm/components/browse/browse.component";
import { MaintainComponent } from "./pdm/components/maintain/maintain.component";



export const routeConfig = [
    { path : 'home', component: HomeComponent},
    { path : 'personnel', component: PdmComponent},
    { path: 'personnel/browse', component: BrowseComponent },
    { path: 'personnel/maintain', component: MaintainComponent },
    { path: '', component: HomeComponent},] 

    