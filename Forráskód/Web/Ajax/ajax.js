const code = "PVJN8Gwebdev25";
const url = "http://gamf.nhely.hu/ajax2/";
let lastUpdatedId = null;

function showFeedback(message) {
  document.getElementById("feedback").innerText = message;
}

function validateInputs(name, height, weight) {
  if (!name || !height || !weight) {
    showFeedback("Minden mezőt ki kell tölteni!");
    return false;
  }
  if (name.length > 30) {
    showFeedback("A név maximum 30 karakter lehet.");
    return false;
  }
  return true;
}

// CREATE
function createRecord() {
  const name = document.getElementById("name").value.trim();
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  if (!validateInputs(name, height, weight)) return;

  const params = new URLSearchParams({
    op: "create",
    code,
    name,
    height,
    weight
  });

  fetch(url, { method: "POST", body: params })
    .then(res => res.text())
    .then(() => {
      showFeedback("Rekord hozzáadva.");
      loadData();
    });
}

// READ
function loadData() {
  const params = new URLSearchParams({
    op: "read",
    code
  });

  fetch(url, { method: "POST", body: params })
    .then(res => res.json())
    .then(data => {
      const listDiv = document.getElementById("dataList");
      listDiv.innerHTML = "";

      let totalHeight = 0;
      let maxHeight = 0;

      data.list.forEach(entry => {
        const row = document.createElement("p");
        row.innerText = `ID: ${entry.id} | Név: ${entry.name} | Magasság: ${entry.height} | Súly: ${entry.weight}`;

        if (parseInt(entry.id) === parseInt(lastUpdatedId)) {
          row.style.backgroundColor = "#d4edda";
          row.style.border = "1px solid #28a745";
          row.style.padding = "5px";
          row.style.borderRadius = "5px";
          row.style.marginBottom = "5px";
        }

        listDiv.appendChild(row);

        const h = parseFloat(entry.height);
        if (!isNaN(h)) {
          totalHeight += h;
          if (h > maxHeight) maxHeight = h;
        }
      });

      const avg = (data.list.length > 0) ? (totalHeight / data.list.length).toFixed(2) : 0;
      document.getElementById("stats").innerHTML = `
        <p><strong>Magasság statisztikák:</strong></p>
        <ul>
          <li>Összeg: ${totalHeight}</li>
          <li>Átlag: ${avg}</li>
          <li>Legnagyobb: ${maxHeight}</li>
        </ul>
      `;

      lastUpdatedId = null;
    });
}

// FIX: ID-típus konvertálása a hiba elkerüléséhez
function getDataForId() {
  const id = parseInt(document.getElementById("updateId").value);
  if (!id) {
    showFeedback("Add meg az ID-t!");
    return;
  }

  const params = new URLSearchParams({ op: "read", code });

  fetch(url, { method: "POST", body: params })
    .then(res => res.json())
    .then(data => {
      const item = data.list.find(e => parseInt(e.id) === id);
      if (!item) {
        showFeedback("Nincs ilyen ID.");
        return;
      }
      document.getElementById("updateName").value = item.name;
      document.getElementById("updateHeight").value = item.height;
      document.getElementById("updateWeight").value = item.weight;
      showFeedback("Adatok betöltve.");
    });
}

// UPDATE
function updateRecord() {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value.trim();
  const height = document.getElementById("updateHeight").value;
  const weight = document.getElementById("updateWeight").value;

  if (!id || !validateInputs(name, height, weight)) return;

  const params = new URLSearchParams({
    op: "update",
    id,
    code,
    name,
    height,
    weight
  });

  fetch(url, { method: "POST", body: params })
    .then(res => res.text())
    .then(() => {
      lastUpdatedId = id;
      showFeedback("Sikeres módosítás.");
      loadData();
    });
}

// DELETE
function deleteRecord() {
  const id = document.getElementById("deleteId").value;
  if (!id) {
    showFeedback("Add meg a törlendő ID-t!");
    return;
  }

  const params = new URLSearchParams({
    op: "delete",
    id,
    code
  });

  fetch(url, { method: "POST", body: params })
    .then(res => res.text())
    .then(() => {
      showFeedback("Rekord törölve.");
      loadData();
    });
}
