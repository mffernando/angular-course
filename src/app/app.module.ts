import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Components01Component } from "./components01/components01.component";
import { CoursesModule } from "./components01/courses/courses.module";

@NgModule({
  declarations: [AppComponent, Components01Component],
  imports: [BrowserModule, CoursesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
