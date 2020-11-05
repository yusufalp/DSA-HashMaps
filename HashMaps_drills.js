const HashMap = require("./hashmaps");

function main() {
  let lotr = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5
  HashMap.SIZE_RATIO = 3

  lotr.set("Hobbit", "Bilbo")
  lotr.set("Hobbit", "Frodo")
  lotr.set("Wizard", "Gandalf")
  lotr.set("Human", "Aragorn")
  lotr.set("Elf", "Legolas")
  lotr.set("Maiar", "The Necromancer")
  lotr.set("Maiar", "Sauron")
  lotr.set("RingBearer", "Gollum")
  lotr.set("LadyOfLight", "Galadril")
  lotr.set("HalfElven", "Arwen")
  lotr.set("Ent", "Treebeard") //11

  // console.log(lotr.get("Hobbit"))

  return lotr
}

// console.log(main())

//----------
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
}

// WhatDoesThisDo()

//----------

function removeDuplicates(str) {
  let strNoSpace = str.split(' ').join('')
  let result = new HashMap();
  HashMap.MAX_LOAD_RATIO = 0.5
  HashMap.SIZE_RATIO = 3
  let stringResult = ''
  for (let letter of strNoSpace.toLowerCase()) {
    try {
      result.get(letter)
    }
    catch (e) {
      result.set(letter, letter)
      stringResult += letter
    }

  }
  console.log(stringResult)
}

removeDuplicates('google all that you think can think of')

//----------
