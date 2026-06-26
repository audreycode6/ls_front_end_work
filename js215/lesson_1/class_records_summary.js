/*
At the end of each term, faculty members need to
prepare a class record summary for students based
on the weighted scores of exams and exercises. In
this practice problem, we will prepare one such
summary from some provided student records.
*/

/*
Grading areas include exams and exercises, with the following weights:

Grading Area |  Weight
Exam         |  65%
Exercises    |  35%

Each term has four exams, and several exercises.
Every exam has a fixed maximum score of 100, while
exercises have varied maximum score values and counts.
The total maximum point value for all exercises in any
term is always 100, regardless of how many exercises the
students had to complete.

To determine a student's grade, we first determine the
student's average score from the four exams, then sum
all the exercise scores. We then apply the weights to
compute the student's final percent grade. Finally,
we determine the letter equivalent grade from the student's
percent grade we just computed.

Percent Grade | Letter Equivalent
93 - 100      | A
85 - 92       | B
77 - 84       | C
69 - 76       | D
60 - 68       | E
0 - 59        | F

*/

/* generateClassRecordSummary NOTES:
TAKES IN: obj with:
keys representing student and
values being an object with 2 keys:
  id -> num
  scores ->  object with 2 keys:
    exams -> array of nums
    exercises -> array of nums
-----------
RETURNS: new obj with 2 keys:
  studentGrades -> array of strings: e.g "{num} ({letterGrade})"
  exams -> array of objs with 3 keys:
    average -> num
    minimum -> num
    maximum -> num

*/

const EXAM_WEIGHT = 0.65;
const EXERCISES_WEIGHT = 0.35;
const EXAM_COUNT = 4;

/* MAIN FUNC */
function generateClassRecordSummary(scores) {
  const studentsGradeSummary = getStudentsGradesSummary(scores);
  const examSummary = getExamSummary(scores);

  return {
    studentGrades: studentsGradeSummary,
    exams: examSummary,
  };
}

function getStudentsGradesSummary(scoresObj) {
  return Object.keys(scoresObj).map((student) => {
    return getStudentScoreString(scoresObj[student].scores);
  });
}

function getExamSummary(scoresObj) {
  const studentsExamScores = getStudentsExamScores(scoresObj);
  const allExamsScores = getExamScores(studentsExamScores);

  return allExamsScores.map((examScores) => {
    return {
      average: getAvg(examScores),
      minimum: Math.min(...examScores),
      maximum: Math.max(...examScores),
    };
  });
}

function getAvg(arrayOfNumbers) {
  let length = arrayOfNumbers.length;
  return getSum(arrayOfNumbers) / length;
}

/*
-------------------------------
HELPERS TO getStudentsGradesSummary
-------------------------------
*/
function getSum(arrayOfNumbers) {
  return arrayOfNumbers.reduce((acc, curr) => acc + curr);
}

function getFinalPercentGrade(
  avgExamScore,
  exerciseScore,
  examWeight,
  exerciseWeight,
) {
  let finalPercentGrade =
    avgExamScore * examWeight + exerciseScore * exerciseWeight;

  return Math.round(finalPercentGrade).toFixed(1); //  Round to the nearest integer
}

function getLetterGrade(percentGrade) {
  switch (true) {
    case percentGrade >= 93:
      return 'A';
    case percentGrade >= 85 && percentGrade <= 92:
      return 'B';
    case percentGrade >= 77 && percentGrade <= 84:
      return 'C';
    case percentGrade >= 69 && percentGrade <= 76:
      return 'D';
    case percentGrade >= 60 && percentGrade <= 68:
      return 'E';
    default:
      return 'F';
  }
}

function getStudentScoreString(scoreObj) {
  const averageExamScore = getAvg(scoreObj.exams);
  const exercisesSum = getSum(scoreObj.exercises);
  const finalPercentGrade = getFinalPercentGrade(
    averageExamScore,
    exercisesSum,
    EXAM_WEIGHT,
    EXERCISES_WEIGHT,
  );

  const letterGrade = getLetterGrade(finalPercentGrade);
  return `${finalPercentGrade} (${letterGrade})`;
}

/*
-------------------------------
HELPERS TO getExamSummary
-------------------------------
*/
function getStudentsExamScores(scoresObj) {
  return Object.keys(scoresObj).map((student) => {
    return scoresObj[student].scores.exams;
  });
}

function getExamScores(studentsExamScores, examCount = EXAM_COUNT) {
  let examsStudentScores = [];

  for (let examNum = 0; examNum < examCount; examNum += 1) {
    let examScore = studentsExamScores.map((studentScores) => {
      return studentScores[examNum];
    });
    examsStudentScores.push(examScore);
  }

  return examsStudentScores;
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
