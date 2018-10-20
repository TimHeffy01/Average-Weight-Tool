var input  = document.getElementsByClassName('num'),
    button = document.getElementsByTagName('button'),
    output = document.getElementsByClassName('output'),
    custom = document.getElementsByClassName('custom-weight'),
    custB  = document.getElementsByClassName('b'),
    inputs = document.getElementsByTagName('input');

button[0].addEventListener("click", function() {
	var items  = 0,
	    weight = 0;
	
	for(var x = 0; x < custom.length; x++) {
		custB[x].name = custom[x].valueAsNumber;
	}
	for(var i = 0; i < input.length; i++) {
		items  += input[i].valueAsNumber;
		weight += input[i].valueAsNumber * input[i].name;
	}

	var averageWeight = Math.floor(weight / items);
	
	output[0].innerHTML = items;
	output[1].innerHTML = averageWeight;
	
	if(items === 0) {
		alert("Error: No numbers entered.");
		output[1].innerHTML = 0;
	}
})

button[1].addEventListener("click", function() {
	var c = confirm("Are you sure you want to clear all inputs?");
	if (c === true) {
		for(var i = 0; i < inputs.length; i++) {
			inputs[i].valueAsNumber = 0;
		}
		for(var x = 0; x < output.length; x++) {
			output[x].innerHTML = 0;
		}
	}	
})

