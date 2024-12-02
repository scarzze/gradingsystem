function getStudentGrade() {
let marks;
while (true) {
// Prompt the user for input
        marks = prompt("Enter student marks (0 to 100):");

 // Convert input to percent
        marks = Number(marks);

 // Check if the input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log(
        "Please enter a valid mark between 0 and 100.");
        }
// Determine the grade as per scores
    let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }

// Output student's grade
        return 'getStudentGrade your marks is ${marks}${grade} ';
    }
}
getStudentGrade();
