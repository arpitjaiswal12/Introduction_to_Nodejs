const EventEmitter = require("events");
// const EventEmitter=require("events")

const event = new EventEmitter();

// i need to order the pizza

// eg: let order_pizza be an event to order pizza, it can also have so many parameters such as size, topping , quantity

event.on("order_pizza", (size, toppings, qunt) => {
  console.log(
    `The order has been placed ! of ${size} size pizza with ${toppings}.\nTotal quantity order ${qunt}`
  );
});

event.on("order_pizza", (size) => {
  if (size == "large") {
    console.log("OFFER -- You will get a free drink ");
  }
});

console.log("this is asynchronous call");
event.emit("order_pizza", "large", "extra cheese and mashroom", 5);
