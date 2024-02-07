'use strict';

const Lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightnum}`, name });
  },
};
Lufthansa.book(239, 'Maryam Arshad');
Lufthansa.book(654, 'Noman Ejaz');
//console.log(Lufthansa);

const eurowings = {
  airline: 'eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = Lufthansa.book;

//book(26, 'sarah');
// call method
book.call(eurowings, 23, 'sarah');
console.log(eurowings);

book.call(Lufthansa, 239, 'Marre');
console.log(Lufthansa);

// another object

const swiss = {
  airline: 'swiss',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 283, 'john');
console.log(swiss);

//apply method

const flightData = [583, 'Marry Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// bind method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(Lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'steven villiams');
bookLH(239, 'jorge cooper');
bookLX(283, 'Maxilla');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Martha Cooper');
bookEW23('john williams');

// with EventListeners

Lufthansa.planes = 300;
Lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

//Lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', Lufthansa.buyPlane.bind(Lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAX = addTax.bind(null, 0.33);
//addVAX = value => value + value * rate;

console.log(addVAX(100));
console.log(addVAX(23));

// example function return function

const addTax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAX2 = addTax2(0.23);
console.log(addVAX2(100));
console.log(addVAX2(23));
