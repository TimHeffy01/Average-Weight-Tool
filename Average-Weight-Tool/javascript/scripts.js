var button = document.getElementsByTagName("button"),
	output = document.getElementsByClassName("output");
	
button[0].addEventListener("click", function() {
	var input = document.getElementsByClassName("num"),
		custom = document.getElementsByClassName("custom-weight"),
		custB = document.getElementsByClassName("b"),
		items = 0,
		weight = 0;

	for (var x = 0; x < custom.length; x++) {
		custB[x].name = custom[x].valueAsNumber;
	}
	for (var i = 0; i < input.length; i++) {
		items += input[i].valueAsNumber;
		weight += input[i].valueAsNumber * input[i].name;
	}

	var averageWeight = Math.round(weight / items);

	output[0].innerHTML = items;
	output[1].innerHTML = averageWeight;

	if (items === 0) {
		alert("Error: No numbers entered.");
		output[1].innerHTML = 0;
	}
});

var cWrapper = document.getElementById('custom-wrapper');

button[1].addEventListener("click", function() {
	var inputs = document.getElementsByTagName("input");
	var c = confirm("Are you sure you want to clear all inputs?");
	
	if (c === true) {
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].valueAsNumber = 0;
		}
		for (var x = 0; x < output.length; x++) {
			output[x].innerHTML = 0;
		}
		while(cWrapper.childNodes.length > 2) {
			cWrapper.removeChild(cWrapper.lastChild);
		}
	}
});

button[2].addEventListener("click", function() {
	var cs = document.getElementsByClassName('custom');
	var cln = cs[0].cloneNode(true);
	cWrapper.appendChild(cln);
});
