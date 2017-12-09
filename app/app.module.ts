import { NgModule } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule, NativeScriptRouterModule } from "nativescript-angular";
import { AppComponent } from "./app.component";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)],
  declarations: [AppComponent,...navigatableComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
