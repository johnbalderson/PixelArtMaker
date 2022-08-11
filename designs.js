// Select color input
var pixelCanvas = document.getElementById('pixelCanvas');
var color = document.querySelector('#colorPicker')

// Select size input
var input_height = document.getElementById("inputHeight");
var input_width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
var submit_btn = document.querySelector('input[type="submit"]')

// callback function
submit_btn.addEventListener("click", function (e){
    // prevent refreshing
    e.preventDefault()
    // call the function
    makeGrid()
});


function makeGrid() {
    // clear canvas
    pixelCanvas.innerHTML = ""

    // create rows
    for(let i = 0; i < input_height.value; i++){
        var row = document.createElement("tr");

        // create cells
        for(let i = 0; i < input_width.value; i++){
            var cell = document.createElement("td")

            // add cells to rows
            row.appendChild(cell)
            // add rows with cells in them to canvas
            pixelCanvas.appendChild(row)
        }
    }
    // create a list of cells 
    [].forEach.call(document.getElementsByTagName('td'), function(item) { 
        //add an event listener to every one of the cells
        item.addEventListener('click', function() {
            // on click of the cell, change the background color to the value of the color picker
            item.style.backgroundColor = document.getElementById("colorPicker").value;
        }); 
     });
}
