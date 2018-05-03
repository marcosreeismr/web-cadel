//Libs
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//AuthGuard
import { AuthGuard } from './guard/auth.guard';
//Login
import { LoginComponent } from './login/login.component';
//Root Component
import { AppComponent } from './app.component';
//Course
import { CourseComponent } from './modulos/course/course.component';
import { KeepCourseComponent } from './modulos/course/actions/keep/keep-course.component';
import { DetailCourseComponent } from './modulos/course/actions/detail/detail-course.component';

var _basePathCourse = 'curso';
var _basePathLogin = 'login';

var appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: _basePathCourse,
        component: CourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: _basePathCourse + '/manter',
        component: KeepCourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: _basePathCourse + '/manter/:id',
        component: KeepCourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: _basePathCourse + '/detalhes/:id',
        component: DetailCourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: _basePathCourse + '/excluir/:id',
        component: DetailCourseComponent,
        canActivate: [AuthGuard]
    },
    {
        path: _basePathLogin,
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }