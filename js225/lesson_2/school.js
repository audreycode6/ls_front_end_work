/* eslint-disable max-lines-per-function */
'use strict';

const createStudent = require('./student');
/*
Create a school object. The school object uses
  the same kind of student object as the previous
  exercise. It has methods that use and update information
  about the student. Be sure to check out the previous exercise
  for the other arguments that might be needed by the school
  object. Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding
 the student to a collection of students. The method adds a
  constraint that the year can only be any of the following
   values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a
    student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.

getReportCard: Logs the grades of a student for all courses.
 If the course has no grade, it uses "In progress" as the grade.

courseReport: Logs the grades of all students for a given
 course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below.
 Using the three student objects, produce the following values
  from the getReportCard and courseReport methods respectively.
 */

let school = {
  students: [],
  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      console.log('Invalid Year');
      return undefined;
    }
    let student = createStudent(name, year);
    this.students.push(student);
    return student;
  },

  enrollStudent(name, courseObj) {
    let student = this.getStudent(name);
    student.addCourse(courseObj);
  },

  addGrade(studentName, courseCode, grade) {
    //Adds the grade of a student for a course.
    // need student obj -- getStudent(studentName)
    // get student
    let student = this.getStudent(studentName);
    // get course from student.courses that make course code
    let course = student.getCourseByCode(courseCode);
    course.grade = grade;
  },

  getReportCard(studentObj) {
    //Logs the grades of a student for all courses.
    //  If the course has no grade, it uses "In progress" as the grade.

    let coursesArray = studentObj.courses;
    coursesArray.forEach((course) => {
      let grade = course.grade;
      if (grade !== undefined) {
        console.log(`${course.name}: ${course.grade}`);
      } else console.log('In progress');
    });
  },

  courseReport(courseName) {
    let studentsGrades = {};
    this.students.forEach((student) => {
      let course = student.getCourseByName(courseName);
      if (course && course.grade !== undefined) {
        studentsGrades[student.name] = course.grade;
      }
    });
    if (Object.keys(studentsGrades).length !== 0) {
      console.log(`\n = =${courseName} Grades=`);
      Object.keys(studentsGrades).forEach((student) => {
        console.log(` = ${student}: ${studentsGrades[student]}`);
      });
      console.log(' = ----');
      console.log(
        ` = Course Average: ${this.getAverage(Object.values(studentsGrades))}\n`,
      );
      return undefined;
    }
    console.log(undefined);
    return undefined;
  },

  getStudent(name) {
    let match = undefined;
    this.students.forEach((student) => {
      if (student.name === name) {
        match = student;
      }
    });
    return match;
  },

  getAverage(numbers) {
    let sum = numbers.reduce((acc, curr) => acc + curr);
    return Math.ceil(sum / numbers.length);
  },
};

// Examples of created student objects with grades; methods
// on the objects are not shown here for brevity. The
// following are only showing the properties that aren't
// methods for the three objects
let paul = school.addStudent('Paul', '3rd');
school.enrollStudent('Paul', { name: 'Math', code: 101 });
school.enrollStudent('Paul', { name: 'Advanced Math', code: 102 });
school.enrollStudent('Paul', { name: 'Physics', code: 202 });
school.addGrade('Paul', 101, 95);
school.addGrade('Paul', 102, 90);
console.log(paul);
// {
//   name: 'Paul',
//   year: '3rd',
//   courses: [
//     { name: 'Math', code: 101, grade: 95, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//     { name: 'Physics', code: 202, }
//   ],
// }

let mary = school.addStudent('Mary', '1st');
school.enrollStudent('Mary', { name: 'Math', code: 101 });
school.addGrade('Mary', 101, 91);
console.log(mary);
// {
//   name: 'Mary',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

let kim = school.addStudent('Kim', '2nd');
school.enrollStudent('Kim', { name: 'Math', code: 101 });
school.enrollStudent('Kim', { name: 'Advanced Math', code: 102 });
school.addGrade('Kim', 101, 93);
school.addGrade('Kim', 102, 90);
console.log(kim);
// {
//   name: 'Kim',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

/* getReportCard outputs */
school.getReportCard(paul);
// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

/* courseReport outputs */
school.courseReport('Math');
// // = =Math Grades=
// // = Paul: 95
// // = Mary: 91
// // = Kim: 93
// // = ---
// // = Course Average: 93

school.courseReport('Advanced Math');
// // = =Advanced Math Grades=
// // = Paul: 90
// // = Kim: 90
// // = ---
// // = Course Average: 90

school.courseReport('Physics');
// = undefined
