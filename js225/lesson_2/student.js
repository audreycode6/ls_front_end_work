/* eslint-disable max-lines-per-function */
'use strict';
/*
Create an object factory for a student object.
The student object should have the following methods
 and it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course
  is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a
  code and a note as an argument. If a note already
  exists, the note is appended to the existing one.
viewNotes: Logs the notes for all the courses.
  Courses without notes are not displayed.

updateNote: Updates a note for a course. Updating a
  note replaces the existing note with the new note.
*/
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    listCourses() {
      return this.courses;
    },

    addCourse(courseObj) {
      this.courses.push(courseObj); // has properties for its name and code.
    },

    addNote(code, note) {
      let courseMatch = this.getCourseByCode(code);
      if (courseMatch === undefined) {
        return `Course ${code} not found.`;
      }
      let notes = courseMatch['note'];

      if (notes !== undefined) {
        notes.push(note);
      } else {
        courseMatch['note'] = [note];
      }
      return undefined;
    },

    updateNote(code, newNote) {
      let courseMatch = this.getCourseByCode(code);
      if (courseMatch === undefined) {
        return `Course ${code} not found.`;
      }
      courseMatch['note'] = [newNote];
      return undefined;
    },

    viewNotes() {
      this.courses.forEach((course) => {
        let notes = course['note'];
        if (notes) {
          console.log(`${course['name']}: ${notes.join('; ')}`);
        }
      });
    },

    getCourseByCode(code) {
      let courseMatch = undefined;
      this.courses.forEach((course) => {
        if (course['code'] === code) {
          courseMatch = course;
        }
      });
      return courseMatch;
    },
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
