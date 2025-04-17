// Web Storage
function saveToStorage() {
    const input = document.getElementById("storageInput").value;
    localStorage.setItem("savedText", input);
    document.getElementById("storageOutput").innerText = `Mentve: ${input}`;
  }
  
  // Geolocation
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        document.getElementById("geoOutput").innerText =
          `Szélesség: ${position.coords.latitude}, Hosszúság: ${position.coords.longitude}`;
      }, () => {
        document.getElementById("geoOutput").innerText = "Helymeghatározás nem engedélyezett.";
      });
    } else {
      document.getElementById("geoOutput").innerText = "A böngésző nem támogatja a Geolocation API-t.";
    }
  }
  
  // Canvas
  window.onload = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 50);
  };
  
  // Drag and Drop
  const dragItem = document.getElementById("dragItem");
  const dropZone = document.getElementById("dropZone");
  
  dragItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", dragItem.id);
  });
  
  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  
  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    const item = document.getElementById(data);
    dropZone.appendChild(item);
  });
  