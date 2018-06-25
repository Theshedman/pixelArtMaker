// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(() => {
  //set listener to the form submit event
  $('#sizePicker').submit(event => {
    event.preventDefault();

    makeGrid();
    applyColor();
    removeGrid();
    clearColor();
  });
});

//create the grid using the value of the grid sizes
const makeGrid = () => {
  $('tr').remove();
  //get Grid sizes
  let gridHeight = $('#inputHeight').val();
  let gridWidth = $('#inputWeight').val();

  for (let row = 1; row <= gridHeight; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (let col = 1; col <= gridWidth; col++) {
      $('tr').filter(':last').append('<td></td>');
    }
  }
}

//add color to the cell when clicked
const applyColor = () => {
  const cells = $('td');

  cells.click(function () {

    //extract the current value of the color picker
    let color = $('#colorPicker').val();

    //check for style attribute and remove or add it.
    if ($(this).attr('style')) {
      $(this).removeAttr('style');
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  });
}

//remove the whole grid when a user clicks the Remove Grid button
const removeGrid = () => {
  const removeGridButton = $('#removeGrid');
  const grid = $('tr');
  removeGridButton.click(() => {
    grid.remove();
  });
}

//clear the whole color when a user clicks the Clear Color button
const clearColor = () => {
  const clearColorButton = $('#clearColor');
  const gridCell = $('td');
  clearColorButton.click(() => {
    gridCell.removeAttr('style');
  });
}
