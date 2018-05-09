import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SysMessages } from './../../common/mensagens/messages';

import { AlertService } from './../../directives/alert/shared/alert.service';
import { Course } from './shared/course.model';
import { CourseService } from './shared/course.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html'
})
export class CourseComponent {
    filter: Course;
    courseList: Course[];

    //dependency injection
    constructor(
        private courseService: CourseService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private alertService: AlertService
    ) {
        this.filter = new Course();
        this.courseList = [];
        this.search();
    }

    search(): void {
        this.courseService.list(this.filter)
            .subscribe(data => {
                this.courseList = <Course[]>data;
                if (this.courseList.length == 0) {
                    this.alertService.error(SysMessages.get(7));
                }
            }, error => {
                this.alertService.error(error);
            });
    }

    goBack(): void {
        this.location.back();
    }

}