console.log("hell0");


//array of pets
const pets = [{
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    name: "Trouble",
    color: "Poop-Colored",
    specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  }
];


//uploads a function outputting a array of objects into html file
const outputDom = (divId, petStr) => {

  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = petStr;
}

//capitalizes the first letter of a word
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//loop through array of objects to get pets
const petLoop = (arr) => {

  let domString = '';

  for (let i = 0; i < arr.length; i++) {
    domString += `<div class = "cardCSS">`;
    domString += `<header>${arr[i].name}</header> `;
    domString += `<div class = "cardContent">`;
    domString += `<div class = "imgDiv"><img src=${arr[i].imageUrl} alt=""></div>`;
    domString += `<p>${arr[i].color}</p> `;
    domString += `<p>${arr[i].specialSkill}</p> `;
    domString += `</div>`;
    domString += `<footer class = "${arr[i].type}Card">${capitalize(arr[i].type)}</footer> `;
    domString += `</div> `;
  }

  outputDom('cardLocation', domString);
};

const checkType = (e) => {

  const idButton = e.target.id;
  if (idButton === 'all') {
    petLoop(pets);

  } else {

    const animals = [];

    for (let i = 0; i < pets.length; i++) {
      if (pets[i].type === idButton) {
        animals.push(pets[i]);
      }

    }

    petLoop(animals);

  }


}

const event = () => {

  document.getElementById('dino').addEventListener('click', checkType);
  document.getElementById('cat').addEventListener('click', checkType);
  document.getElementById('dog').addEventListener('click', checkType);
  document.getElementById('all').addEventListener('click', checkType);
}


const init = () => {
  petLoop(pets);
  event();
}

init();