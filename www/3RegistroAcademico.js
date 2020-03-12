'use strict';

class Person {
    name;
    age;
    gender;

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    showPerson(Person) {
        console.log(Person)
    }
}

const myPerson = new Person();

class Student extends Person {
    subject;
    group;

    constructor(name, age, gender, subject, group) {
        super(name, age, gender);
        this.subject = subject;
        this.group = group;
    }

    static createStudents(names, age, gender, subject, group) {
        return names.map((name, index) => {
            return new Student(name, age[index], gender[index], subject[index], group[index]);
        });
    }
}

const studentName = ['Paco', 'Yanira', 'Uxía', 'Pepe', 'Alicia', 'Manuel', 'Olivier', 'Jennifer', 'Iker', 'Ana'];
const studentAge = [53, 24, 45, 36, 27, 41, 32, 50, 28, 39];
const studentGender = ['Hombre', 'Mujer', 'Mujer', 'Hombre', 'Mujer', 'Hombre', 'Hombre', 'Mujer', 'Hombre', 'Mujer'];
const studentSubject = ['HTML', 'CSS', 'JavaScript', 'JavaScript', 'HTML', 'JavaScript', 'CSS', 'JavaScript', 'CSS', 'HTML']
const studentGroup = ['A', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'A', 'A'];

const students = Student.createStudents(studentName, studentAge, studentGender, studentSubject, studentGroup)

class Teacher extends Person {
    subject;
    group;
    studentList = [];

    constructor(name, age, gender, subject, group, studentList) {
        super(name, age, gender);
        this.subject = subject;
        this.group = group;
        this.studentList = studentList;
    }

    static createTeachers(names, age, gender, subject, group, studentList) {
        return names.map((name, index) => {
            return new Teacher(name, age[index], gender[index], subject[index], group[index], studentList[index]);
        });
    }

    filterStudents(students) {
        for (let i = 0; i < students.length; i++) {
            for (let j = 0; j < teachers.length; j++) {
                if (students[i].subject === teachers[j].subject && students[i].group === teachers[j].group) {
                    teachers[j].studentList.push(students[i])
                }
            }
        }
    }
}

const myTeacher = new Teacher();

const teacherName = ['Berto', 'Iván', 'Berta', 'Fran', 'David'];
const teacherAge = [42, 34, 45, 37, 29];
const teacherGender = ['Hombre', 'Hombre', 'Mujer', 'Hombre', 'Hombre'];
const teacherSubject = ['HTML', 'JavaScript', 'CSS', 'CSS', 'JavaScript'];
const teacherGroup = ['A', 'B', 'A', 'B', 'A'];
const teacherStudentList = [[], [], [], [], []];

const teachers = Teacher.createTeachers(teacherName, teacherAge, teacherGender, teacherSubject, teacherGroup, teacherStudentList)

myTeacher.filterStudents(students);

myPerson.showPerson(teachers);