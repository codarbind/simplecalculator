var readyForNextInput = 2;

var input = "";

document.getElementById("zero").addEventListener('click', function(){
input = input + '0';
 document.getElementById("input").innerHTML = input ;
});


document.getElementById("decimal").addEventListener('click', function(){
input = input + '.';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '.';
 document.getElementById("input").innerHTML = input ;};


});

document.getElementById("one").addEventListener('click', function(){
input = input + '1';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '1';
 document.getElementById("input").innerHTML = input ;};


});

document.getElementById("two").addEventListener('click', function(){
input = input + '2';
 document.getElementById("input").innerHTML = input ;
if (input.length == 2 && input.charAt(0) == 0  ) {input = '2';
 document.getElementById("input").innerHTML = input ;};


});

document.getElementById("three").addEventListener('click', function(){
input = input + '3';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '3';
 document.getElementById("input").innerHTML = input ;};

});

document.getElementById("four").addEventListener('click', function(){
input = input + '4';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '4';
 document.getElementById("input").innerHTML = input ;};

});
document.getElementById("five").addEventListener('click', function(){
input = input + '5';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '5';
 document.getElementById("input").innerHTML = input ;};

});
document.getElementById("six").addEventListener('click', function(){
input = input + '6';
 document.getElementById("input").innerHTML = input ;
if (input.length == 2 && input.charAt(0) == 0  ) {input = '6';
 document.getElementById("input").innerHTML = input ;};


});
document.getElementById("seven").addEventListener('click', function(){
input = input + '7';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '7';
 document.getElementById("input").innerHTML = input ;};

});
document.getElementById("eight").addEventListener('click', function(){
input = input + '8';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '8';
 document.getElementById("input").innerHTML = input ;};

});
document.getElementById("nine").addEventListener('click', function(){
input = input + '9';
 document.getElementById("input").innerHTML = input ;

if (input.length == 2 && input.charAt(0) == 0  ) {input = '9';
 document.getElementById("input").innerHTML = input ;};

});

//  document.getElementById("signContainer").innerHTML = 'A' ; // to prevent signContainer from blankness


var something = document.getElementById('signContainer').innerHTML ;


document.getElementById("plus").addEventListener('click', function(){

readyForNextInput = readyForNextInput + 3;
 document.getElementById("signContainer").innerHTML = '+' ;
  input = input + '+';
 document.getElementById("input").innerHTML = input ;

// to prevent concurrent operators
 var  lengthOfFirstInput = input.length ;
//alert(lengthOfFirstInput);
 var indexOfWantedInput = lengthOfFirstInput - 2 ;
 //alert(indexOfWantedInput);
 var LastEnteredCharacter = input.charAt(indexOfWantedInput);
 //alert(LastEnteredCharacter);
if (LastEnteredCharacter == '-' || LastEnteredCharacter == '+' || LastEnteredCharacter == '/' || LastEnteredCharacter == '*'
	|| indexOfWantedInput == -1){
	//alert('hello') 

 
input = input.substring(0,indexOfWantedInput) ; // remove the last inputted digit
 document.getElementById("input").innerHTML = input + '+';

};



});

document.getElementById("minus").addEventListener('click', function(){

 document.getElementById("signContainer").innerHTML = '-';
 readyForNextInput = readyForNextInput + 3;

input = input + '-';
 document.getElementById("input").innerHTML = input ;

// to prevent concurrent operators
 var  lengthOfFirstInput = input.length ;
//alert(lengthOfFirstInput);
 var indexOfWantedInput = lengthOfFirstInput - 2 ;
// alert(indexOfWantedInput);
 var LastEnteredCharacter = input.charAt(indexOfWantedInput);
// alert(LastEnteredCharacter);
if (LastEnteredCharacter == '-' || LastEnteredCharacter == '+' || LastEnteredCharacter == '/' || LastEnteredCharacter == '*'
	|| indexOfWantedInput == -1) {


 
input = input.substring(0,indexOfWantedInput) ; // remove the last inputted digit
 document.getElementById("input").innerHTML = input + '-';

};

});
document.getElementById("divide").addEventListener('click', function(){

 document.getElementById("signContainer").innerHTML = '/';
 readyForNextInput = readyForNextInput + 3;

  input = input + '/';
 document.getElementById("input").innerHTML = input ;

// to prevent concurrent operators
 var  lengthOfFirstInput = input.length ;
//alert(lengthOfFirstInput);
 var indexOfWantedInput = lengthOfFirstInput - 2 ;
 //alert(indexOfWantedInput);
 var LastEnteredCharacter = input.charAt(indexOfWantedInput);
 //alert(LastEnteredCharacter);
if (LastEnteredCharacter == '-' || LastEnteredCharacter == '+' || LastEnteredCharacter == '/' || LastEnteredCharacter == '*' 
	|| indexOfWantedInput == -1){
	//alert('hello') 

 
input = input.substring(0,indexOfWantedInput) ; // remove the last inputted digit
 document.getElementById("input").innerHTML = input + '/';

};

});
document.getElementById("times").addEventListener('click', function(){

 document.getElementById("signContainer").innerHTML = '*';
   readyForNextInput = readyForNextInput + 3;

   input = input + '*';
 document.getElementById("input").innerHTML = input ;

// to prevent concurrent operators
 var  lengthOfFirstInput = input.length ;
//alert(lengthOfFirstInput);
 var indexOfWantedInput = lengthOfFirstInput - 2 ;
 //alert(indexOfWantedInput);
 var LastEnteredCharacter = input.charAt(indexOfWantedInput);
 //alert(LastEnteredCharacter);
if (LastEnteredCharacter == '-' || LastEnteredCharacter == '+' || LastEnteredCharacter == '/' || LastEnteredCharacter == '*'
	|| indexOfWantedInput == -1){
	//alert('hello') 

 
input = input.substring(0,indexOfWantedInput) ; // remove the last inputted digit
 document.getElementById("input").innerHTML = input + '*';

};

});



document.getElementById("clear").addEventListener('click', function(){
var  lengthOfFirstInput = input.length ;
if (lengthOfFirstInput > 0) {var indexOfWantedInput = lengthOfFirstInput - 1};

input = input.substr(0,indexOfWantedInput) ; // remove the last inputted digit
 document.getElementById("input").innerHTML = input ;

});


document.getElementById('equal').addEventListener('click', function(){

if (input.length > 0) {
	var answer = eval(input);
	//alert (answer);
	document.getElementById('output').innerHTML = answer;};
	input = "";
	document.getElementById("input").innerHTML = input ;

	
});

var goScientific = 0 ;

document.getElementById('scientific').addEventListener('click', function(){

	goScientific += 1 ; // counting the number of times the Go button has been clicked
	//alert('signContainer' + goScientific);
	document.getElementById('scientific').innerHTML = 'Go Basic';

	document.getElementById('input').innerHTML = 'Sorry, you do not have enough subscription for this.'; // error messaage for scientific
	
	// hide basic calculator key rows
	
	document.getElementById('row4').style.display ="none"; 
	document.getElementById('row5').style.display ="none";
	document.getElementById('row6').style.display ="none";
	document.getElementById('row7').style.display ="none";


	if (goScientific%2 == 0) { //even means basic interface , so show the hidden rows 
	document.getElementById('scientific').innerHTML = 'Go Scientific';
	
	document.getElementById('row4').style.display ="block";
	document.getElementById('row5').style.display ="block";
	document.getElementById('row6').style.display ="block";
	document.getElementById('row7').style.display ="block";

	document.getElementById('input').innerHTML = ''; // return to normal


}

	
});







 




