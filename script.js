let ul = document.querySelector("ul");
let click = document.querySelector(".click");
let clear = document.querySelector(".clear");
let input = document.querySelector(".input");

clear.addEventListener("click", () => {
  ul.innerHTML = ``;
});

input.addEventListener("input", updateValue);
function updateValue() {
  ul.innerHTML = "";
  demo.map((item, index) => {
    let text = "";
    for (let i = 0; i < input.value.length; i++) {
      text += item.names.toLocaleLowerCase().split("")[i];
    }

    if (text == input.value) {
      let color = "";
      for (let i = 0; i < input.value.length; i++) {
        color += item.names.split("")[i];
      }
      let discolor = "";
      let newArry = item.names.split("");
      item.names
        .split("")
        .splice(0, input.value.length)
        .map((abc) => {
          newArry.shift();
          discolor = newArry.join("");
        });

      ul.innerHTML += `<li><span>${color}</span>${discolor}</li>`;
    }
  });
}

let demo = [
  {
    names: "Akash",
  },
  {
    names: "Amin",
  },
  {
    names: "Any",
  },
  {
    names: "Al-Amin",
  },
  {
    names: "Babul",
  },
  {
    names: "Bikash",
  },
  {
    names: "Chocroborty",
  },
  {
    names: "cara",
  },
  {
    names: "caleb",
  },
  {
    names: "Dider",
  },
  {
    names: "Dany",
  },
  {
    names: "Diamon",
  },
  {
    names: "Eny",
  },
  {
    names: "Era",
  },
  {
    names: "Emon",
  },
  {
    names: "Eva",
  },
  {
    names: "Faruk",
  },
  {
    names: "Furkan",
  },
  {
    names: "Foysal",
  },
  {
    names: "Geogre",
  },
  {
    names: "Grace",
  },
  {
    names: "Hasan",
  },
  {
    names: "Hosen",
  },
  {
    names: "Hasib",
  },
  {
    names: "Hannan",
  },
  {
    names: "Imran",
  },
  {
    names: "Isita",
  },
  {
    names: "Jamal",
  },
  {
    names: "Jemi",
  },
  {
    names: "Kamrul",
  },
  {
    names: "kamal",
  },
  {
    names: "Limon",
  },
  {
    names: "Lota",
  },
  {
    names: "Meem",
  },
  {
    names: "Mamun",
  },
  {
    names: "Monir",
  },
  {
    names: "Mohammad",
  },
  {
    names: "Meto",
  },
  {
    names: "Nabiya",
  },
  {
    names: "Noyon",
  },
  {
    names: "Naem",
  },
  {
    names: "Oppe",
  },
  {
    names: "Opo",
  },
  {
    names: "Ormi",
  },
  {
    names: "Popy",
  },
  {
    names: "Proma",
  },
  {
    names: "Puspa",
  },
  {
    names: "Prince",
  },
  {
    names: "Pk",
  },
  {
    names: "Queen",
  },
  {
    names: "Rana",
  },
  {
    names: "Rone",
  },
  {
    names: "Rahim",
  },
  {
    names: "Rayhan",
  },
  {
    names: "Ruja",
  },
  {
    names: "Sumaiya",
  },
  {
    names: "Sanjida",
  },
  {
    names: "Sumu",
  },
  {
    names: "Sumi",
  },
  {
    names: "Tamanna",
  },
  {
    names: "Tanha",
  },
  {
    names: "Tomal",
  },
  {
    names: "Urmi",
  },
  {
    names: "Vienna",
  },
  {
    names: "Victoria",
  },
  {
    names: "vanee",
  },
  {
    names: "Willamson",
  },
  {
    names: "Willy",
  },
  {
    names: "Xena",
  },
  {
    names: "Xenia",
  },
  {
    names: "Yeamin",
  },
  {
    names: "Yealia",
  },
  {
    names: "Zemi",
  },
  {
    names: "Zarry",
  },
];

demo.map((item) => {
  ul.innerHTML += `<li>${item.names}</li>`;
});
