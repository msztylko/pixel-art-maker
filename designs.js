let grid = document.querySelector('table');
let color = document.getElementById('colorPicker');
let button = document.querySelector('[type=submit]');

button.addEventListener('click', submitClick);

let firstSubmit = false;

function submitClick(event) {
    event.preventDefault();
    
	if (firstSubmit) {
        while (grid.firstChild) {
			grid.firstChild.remove();
		}
	}
    firstSubmit = true;
    makeGrid();
}

function makeGrid() {
    let height = document.querySelector('#inputHeight').value;
    let width = document.querySelector('#inputWidth').value;  
    for (let i = 1; i <= height; i++) {
        let tr = document.createElement('tr');
        grid.appendChild(tr);
        for (let j = 1; j <= width; j++) {
            let td = document.createElement('td');
			td.addEventListener('click', (event) => {
				td.style.backgroundColor = color.value;
			});
            tr.appendChild(td);
        }
    }
}

