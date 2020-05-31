const studentsArr = [
  {
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7 ]
  },
  {
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7 ]
  },
  {
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8 ]
  },
  {
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9 ]
  }
]

function getAvg(numbers) {
  const total = numbers.reduce((acc, item) => acc + item);
  return total / numbers.length;
}

function showAvgPerStudent(students) {
  console.log('averages per student:');
  students.forEach((student) => console.log(`[name: ${student.name}, average: ${getAvg(student.marks)}]`))
}

function showGeneralAverage(students) {
  const generalAverage = getAvg(students.reduce((allMarks, student) => [...allMarks, ...student.marks], [])); 
  console.log(`general average: ${generalAverage}`);
}

showAvgPerStudent(studentsArr);
showGeneralAverage(studentsArr);
