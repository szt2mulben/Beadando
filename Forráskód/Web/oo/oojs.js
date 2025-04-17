class Animal {
    constructor(name, type, sound, emoji, cssClass) {
      this.name = name;
      this.type = type;
      this.sound = sound;
      this.emoji = emoji;
      this.cssClass = cssClass;
    }
  
    speak(container) {
      const message = document.createElement("div");
      message.className = "speak-message";
      message.innerText = `${this.name} azt mondja: „${this.sound}”`;
      container.appendChild(message);
    }
  
    renderCard() {
      const card = document.createElement("div");
      card.className = `animal-card ${this.cssClass}`;
  
      const emoji = document.createElement("div");
      emoji.className = "animal-emoji";
      emoji.innerText = this.emoji;
  
      const name = document.createElement("h3");
      name.innerText = this.name;
  
      const type = document.createElement("p");
      type.innerText = `(${this.type})`;
  
      const btn = document.createElement("button");
      btn.innerText = "Megszólal";
      btn.onclick = () => this.speak(card);
  
      card.appendChild(emoji);
      card.appendChild(name);
      card.appendChild(type);
      card.appendChild(btn);
  
      return card;
    }
  }
  
  class Lion extends Animal {
    constructor(name) {
      super(name, "oroszlán", "Rrrroaaar!", "🦁", "lion-card");
    }
  }
  
  class Elephant extends Animal {
    constructor(name) {
      super(name, "elefánt", "Túúút-túút!", "🐘", "elephant-card");
    }
  }
  
  class Snake extends Animal {
    constructor(name) {
      super(name, "kígyó", "Sssssssss!", "🐍", "snake-card");
    }
  }
  
  class Parrot extends Animal {
    constructor(name) {
      super(name, "papagáj", "Helló-halló!", "🦜", "parrot-card");
    }
  }
  
  function createAnimals() {
    const zoo = document.getElementById("zoo");
    zoo.innerHTML = "";
  
    const animals = [
      new Lion("Leo"),
      new Elephant("Dumbo"),
      new Snake("Sly"),
      new Parrot("Coco")
    ];
  
    animals.forEach(animal => {
      const card = animal.renderCard();
      zoo.appendChild(card);
    });
  }
  