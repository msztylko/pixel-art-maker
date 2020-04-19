
let grid = document.querySelector('table');
let color = document.getElementById('colorPicker');
let button = document.querySelector('[type=submit]');

button.addEventListener('click', submitClick);


function submitClick(event) {    
	event.preventDefault();
    // remove previous grid before creating a new one
	document.querySelector('#pixelCanvas').innerHTML = ''  
	makeGrid();
}

// function that creates grid with height and width specified by user
function makeGrid() {
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;  
    for (let i = 1; i <= height; i++) {
        let tr = document.createElement('tr');
        grid.appendChild(tr);
        for (let j = 1; j <= width; j++) {
            let td = document.createElement('td');
			// change cell background to color chosen by user
			td.addEventListener('click', (event) => {
				td.style.backgroundColor = color.value;
			});
            tr.appendChild(td);
        }
    }
}

