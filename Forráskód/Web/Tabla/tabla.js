const form = document.getElementById('userForm');
const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
const search = document.getElementById('search');
let users = [];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const age = parseInt(document.getElementById('age').value);
  const city = document.getElementById('city').value.trim();

  if (name && age && city) {
    users.push({ name, age, city });
    renderTable();
    form.reset();
  }
});

function renderTable() {
  table.innerHTML = '';
  users.forEach((user, index) => {
    const row = table.insertRow();
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.age}</td>
      <td>${user.city}</td>
      <td><button onclick="deleteUser(${index})">Törlés</button></td>
    `;
  });
}

function deleteUser(index) {
  users.splice(index, 1);
  renderTable();
}

search.addEventListener('input', () => {
  const value = search.value.toLowerCase();
  const rows = table.getElementsByTagName('tr');
  Array.from(rows).forEach(row => {
    const cells = row.getElementsByTagName('td');
    const match = Array.from(cells).some(cell => cell.innerText.toLowerCase().includes(value));
    row.style.display = match ? '' : 'none';
  });
});

function sortTable(colIndex) {
  users.sort((a, b) => {
    const valA = Object.values(a)[colIndex];
    const valB = Object.values(b)[colIndex];
    return typeof valA === 'string' ? valA.localeCompare(valB) : valA - valB;
  });
  renderTable();
}
