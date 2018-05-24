import { Course } from './../../course/shared/course.model';
import { Subject } from './../../subject/shared/subject.model';
import { Class } from './../../class/shared/class.model';
import { Teacher } from './../../teacher/shared/teacher.model';

export class Classroom {
    id: number;
    diaDaSemana: number;
    horaInicio: String;
    horaFim: String;
    semestre: number;
    ano: number;
    curso: Course;
    disciplina: Subject;
    professor: Teacher;
    turmas: Classroom[];

    constructor() {
        this.curso = new Course();
        this.disciplina = new Subject();
        this.professor = new Teacher();
        this.turmas = [];
    }
} 