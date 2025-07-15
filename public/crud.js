document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("#student-table tbody");

  function loadStudents() {
    fetch('/api/students')
      .then(res => res.json())
      .then(data => {
        tableBody.innerHTML = '';
        data.forEach(student => {
          const row = `
            <tr>
              <td>${student.name}</td>
              <td>${student.email}</td>
              <td>${student.course}</td>
              <td>
                <button onclick="editStudent('${student._id}')">Edit</button>
                <button onclick="deleteStudent('${student._id}')">Delete</button>
              </td>
            </tr>`;
          tableBody.innerHTML += row;
        });
      });
  }

  window.editStudent = (id) => {
    const newName = prompt("Enter new name:");
    const newEmail = prompt("Enter new email:");
    const newCourse = prompt("Enter new course:");

    fetch(`/api/students/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, email: newEmail, course: newCourse })
    }).then(loadStudents);
  };

  window.deleteStudent = (id) => {
    if (confirm("Are you sure to delete?")) {
      fetch(`/api/students/${id}`, { method: 'DELETE' }).then(loadStudents);
    }
  };

  loadStudents();
});
