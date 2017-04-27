'use strict';

var inputs = document.getElementsByClassName('table-input');

function colorNotNull (event) {
    var ev = event.target;
    console.log(ev);
    if(ev.value!="0"){
        ev.classList.add('not-null-input');
    } else{
        ev.classList.remove('not-null-input');
    }
}

function hoverColor (event){
    var ev = event.target;
    var ind = ev.id;

	var str = ind[0];
	var stl = ind[1];

    for(var i = 1; i<=5; i++){
        var targetpair = document.querySelector('.task-table tr:nth-child('+str+') td:nth-child('+i+')');
    	targetpair.classList.add('not-null-input-line');
    }

    for(var i = 1; i<=4; i++){
        var targetpair = document.querySelector('.task-table tr:nth-child('+i+') td:nth-child('+stl+')');
    	targetpair.classList.add('not-null-input-line');
    }

	var targetpair = document.querySelector('.task-table tr:nth-child('+str+') td:nth-child('+stl+')');
	targetpair.classList.add('not-null-input');

}

function outColor (event){
    var ev = event.target;
    var ind = ev.id;

	var str = ind[0];
	var stl = ind[1];

    for(var i = 1; i<=5; i++){
        var targetpair = document.querySelector('.task-table tr:nth-child('+str+') td:nth-child('+i+')');
    	targetpair.classList.remove('not-null-input-line');
    }

    for(var i = 1; i<=4; i++){
        var targetpair = document.querySelector('.task-table tr:nth-child('+i+') td:nth-child('+stl+')');
    	targetpair.classList.remove('not-null-input-line');
    }

	var line = document.querySelector('.task-table tr:nth-child('+str+') td:nth-child('+stl+')');
	line.classList.remove('not-null-input');

}

for(var i = 0; i<inputs.length; i++){
    inputs[i].addEventListener('change', colorNotNull);
    inputs[i].addEventListener('mouseover', hoverColor);
	inputs[i].addEventListener('mouseout', outColor);
}

document.getElementById('btn-help').addEventListener('click', function() {

    if(document.getElementById('help').classList.contains('closed')){
        document.getElementById('btn-help').textContent = "Назад";
    } else{
        document.getElementById('btn-help').textContent = "Справка";
    }
    document.getElementById('task').classList.toggle('closed');
    document.getElementById('help').classList.toggle('closed');


});
