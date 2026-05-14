const students = []; // Array to store student info

const studentNameInput = document.getElementById('student-name');
const studentGradeInput = document.getElementById('student-grade');
const addStudentBtn = document.getElementById('add-student-btn');
const studentTableBody = document.querySelector('#student-table tbody');

// Function to calculate average
function calculateAverage(grades) {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return (total / grades.length).toFixed(2);
}

// Function to render students in the table
function renderStudents() {
  studentTableBody.innerHTML = ''; // Clear previous content
  students.forEach(student => {
    const tr = document.createElement('tr');

    const nameTd = document.createElement('td');
    nameTd.textContent = student.name;

    const gradesTd = document.createElement('td');
    gradesTd.textContent = student.grades.join(', ');

    const avgTd = document.createElement('td');
    avgTd.textContent = calculateAverage(student.grades);

    tr.appendChild(nameTd);
    tr.appendChild(gradesTd);
    tr.appendChild(avgTd);

    studentTableBody.appendChild(tr);
  });
}

// Event listener to add student
addStudentBtn.addEventListener('click', () => {
  const name = studentNameInput.value.trim();
  const grade = parseFloat(studentGradeInput.value);

  if (!name || isNaN(grade)) {
    alert('Please enter valid name and grade');
    return;
  }

  // Check if student already exists
  let student = students.find(s => s.name === name);
  if (student) {
    student.grades.push(grade); // Add new grade
  } else {
    students.push({ name: name, grades: [grade] });
  }

  studentNameInput.value = '';
  studentGradeInput.value = '';

  renderStudents();
});