



var people = ["Roy", "Alex", "Jane", "Frank", "Jones", "Josh", "Cat"];

var passed = function(){
	
  var person = people[(Math.random() * people.length - 1)];
  var time = getTime();

  var moment = function(){
  	console.log("Here we are " + person + "at " + time + ".");
  };
};

