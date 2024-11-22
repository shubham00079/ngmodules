// main.ts code needs to be changed for ngmodules
// app.component.ts is not the entry point, instead app.modul.ts is.

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);