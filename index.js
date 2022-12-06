// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Wherefore Art Thou</h1>`;

function whatsInaName(collection, source) {
  const arr = collection.filter((item) => {
    for (let i in source) {
      if (source[i] !== item[i]) {
        return false;
      }
    }
    return true;
  });
  return arr;
}

console.log(
  whatsInaName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
); // returns [{ first: "Tybalt", last: "Capulet" }]
console.log(
  whatsInaName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
); // returns [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
console.log(
  whatsInaName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
); // returns [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
console.log(
  whatsInaName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
); // returns [{ "apple": 1, "bat": 2, "cookie": 2 }]
console.log(
  whatsInaName(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 },
      { bat: 2 },
    ],
    { apple: 1, bat: 2 }
  )
); // returns [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
console.log(whatsInaName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 })); // returns []
console.log(
  whatsInaName([{ a: 1, b: 2, c: 3, d: 9999 }], { a: 1, b: 9999, c: 3 })
); // returns []
