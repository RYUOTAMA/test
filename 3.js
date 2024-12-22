// script.js
document.getElementById("borrowForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const studentName = document.getElementById("studentName").value;
  const equipmentName = document.getElementById("equipmentName").value;
  const quantity = document.getElementById("quantity").value;

  // Add new row to the table
  const table = document.getElementById("borrowTable").querySelector("tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
      <td>${table.rows.length + 1}</td>
      <td>${studentName}</td>
      <td>${equipmentName}</td>
      <td>${quantity}</td>
      <td><button class="delete-btn">ลบ</button></td>
  `;

  table.appendChild(row);

  // Add delete functionality to the delete button
  row.querySelector(".delete-btn").addEventListener("click", function() {
      row.remove();
      updateTableNumbers();
  });

  // Clear the form inputs
  document.getElementById("borrowForm").reset();
});

// Update row numbers after deletion
function updateTableNumbers() {
  const rows = document.querySelectorAll("#borrowTable tbody tr");
  rows.forEach((row, index) => {
      row.cells[0].textContent = index + 1;
  });
}
