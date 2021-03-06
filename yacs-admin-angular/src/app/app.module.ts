import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppNavComponent } from './app-nav/app-nav.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AppRouterModule } from './app-router/app-router.module';
import { SchoolListComponent } from './school/school-list/school-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentDetailComponent } from './department/department-detail/department-detail.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { SectionListComponent } from './section/section-list/section-list.component';
import {YacsService} from './services/yacs.service';
//YACS API uses older http module
import { HttpInMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpModule, XHRBackend } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SchoolDetailComponent } from './school/school-detail/school-detail.component';
import {environment} from '../environments/environment';
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { SectionDetailComponent } from './section/section-detail/section-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    WelcomePageComponent,
    SchoolListComponent,
    DepartmentListComponent,
    DepartmentDetailComponent,
    CourseListComponent,
    SectionListComponent,
    SchoolDetailComponent,
    CourseDetailComponent,
    SectionDetailComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    HttpClientModule,AppRouterModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true, delay: 100}),   ],
  providers: [
    Title,
    /* Check environment to determine which YacsService
     *  should be used.
     * If we are in production, use YacsProdService,
     * otherwise use FakeYacsService */
    {provide: YacsService,
      useClass: environment.yacsService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
