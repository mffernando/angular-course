import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./courses.component";
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CoursesComponent, CourseDetailsComponent],
  exports: [CoursesComponent]
})
export class CoursesModule {}
