//Business Logic
function Ticket(time, age, movie) {
  this.time = time;
  this.age = age;
  this.movie = movie;
}

Ticket.prototype.ticketPrice = function() {
  var price = 20;
if (this.time + this.age + this.movie < 5) {
  return (price - 10);
} else if (price === 20) {
  return (price);
};
}

// User Interface
$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();

    var inputtedTime = parseInt($("#time").val());
    var inputtedAge = parseInt($("#age").val());
    var inputtedMovie = parseInt($("#movie").val());
    var ticket = new Ticket(inputtedTime, inputtedAge, inputtedMovie);
    console.log(ticket);




  var price = ticket.ticketPrice();
  console.log(price);
  });
});
