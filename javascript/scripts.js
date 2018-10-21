let cn = (classname) => document.getElementsByClassName(classname);
let tn = (tagname) => document.getElementsByTagName(tagname);
let id = (idname) => document.getElementById(idname);

function log(arg) {
    console.log(arg);
};

function error(msg) {
    alert(msg);
};
let button = tn('button');
let output = cn('output');
button[1].addEventListener("click", function(e) {
    let input = cn('num');
    let custom = cn('custom-weight');
    let items = 0;
    let weight = 0;
    for (var x = 0; x < custom.length; x++) {
        cn('b')[x].name = custom[x].valueAsNumber;
    }
    for (var i = 0; i < input.length; i++) {
        items += input[i].valueAsNumber;
        weight += input[i].valueAsNumber * input[i].name;
    }
    log("total items: " + items + '\n' + "total weight: " + weight + '\n' + "average weight: " + weight / items + '\n' + "rounded: " + Math.round(weight / items));
    var averageWeight = Math.round(weight / items);
    output[0].innerHTML = items;
    output[1].innerHTML = averageWeight;
    if (items === 0) {
        error("No numbers entered!")
        output[1].innerHTML = 0;
    }
});
let wrapper = id('custom-wrapper');
let inputs = tn('input');
button[2].addEventListener("click", function() {
    var c = confirm("Are you sure you want to clear all inputs?");
    if (c === true) {
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].valueAsNumber = 0;
        }
        for (var x = 0; x < output.length; x++) {
            output[x].innerHTML = 0;
        }
        while (wrapper.childNodes.length > 2) {
            wrapper.removeChild(wrapper.lastChild);
        }
    }
});
button[0].addEventListener("click", function() {
    var cln = cn('custom')[0].cloneNode(true);
    wrapper.appendChild(cln);
});
