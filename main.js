
// 
var tripleFive = function(){
	for(var i=0; i<3; i++){
		console.log("Five!");
	}
};

tripleFive());

// 
var lastLetter = function(str){
	return str[str.length-1];
};

console.log(lastLetter("hello"));
console.log(lastLetter("island"));


// 
var square = function(num){
	return num*num;
};

console.log(square(3));
console.log(square(5));


// 
var negate = function(num){
	return -num;
};

console.log(negate(5));
console.log(negate(8));


// 
var toArray = function(arg1, arg2, arg3){
	var array = [arg1,arg2,arg3];
	return array;
};

console.log(toArray(1,4,5));
console.log(toArray(8,9,10));

// var toArray = function(str){
// 	var array = str.split(",");
// 	return array;
// };

// console.log(toArray(1,4,5));
// console.log(toArray(8,9,10));


// 
var startsWithA = function(str){
	if(str[0].toLowerCase() === 'a'){
		return true;
	}
	else{
		return false;
	}
};

console.log(startsWithA('aardvark'));
console.log(startsWithA('bear'));


// 
var excite = function(str){
	return str + "!!!";
};

console.log(excite('yes'));
console.log(excite('go'));


// 
var sun = function(str){
	return str.indexOf('sun') !== -1;
};

console.log(sun('sundries'));
console.log(sun('asunder'));
console.log(sun('catapult'));


// 
var tiny = function(num){
	return num > 0 && num < 1;
};

console.log(tiny(0.3));
console.log(tiny(14));
console.log(tiny(-5));


// 
var getSeconds = function(str){
	var arr = str.split(":");
	return (+arr[0])*60 + (+arr[1]);
};

console.log(getSeconds('01:30'));
console.log(getSeconds('10:25'));
