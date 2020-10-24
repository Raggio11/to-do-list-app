function newItem() {
  /*1. Adding a new item to the list of items:*/
  let li = $('<li></li>'); /*creates list item to the variable 'li'*/
  let inputValue = $('input').val();/* for the user input */
  li.append(inputValue); /* puts the input into a list */
/* if input is empty gives an erorr alert*/
if(inputValue === ''){
  alert("You must write something!");
} else {
  $('#list').append(li);
}
 //2. Crossing out an item from the list of items:
function crossOut(){
  li.ClassList.toggle("strike");
}
li.on("dblclick",function crossOut(){
  li.toggleClass("strike"); /* Has to be a 'toggle' class or wont work, creates a line with item is clicked.*/
});

 //3 Adding the delete button "X":
let crossOutButton = $('<crossOutButton></crossOutButton>');/*creates space for the button */
crossOutButton.append(document.createTextNode('x')); /*assigns the button a text node to click on. Is needed for cross out to work*/
li.append(crossOutButton);/* Makes button appear on screen*/

crossOutButton.on('click', deleteListItem);/*Gives the button an action*/
function deleteListItem(){
  li.addClass('delete')
}
/*allows items to be reorder*/
$('#list').sortable();
}
