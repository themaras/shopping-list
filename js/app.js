function addItem() {
var text = $('.add-items').val();
$('.ul').append('<img class="trash" src="images/trash.png"><li>'+text+'<button class="gotit">gotit!</button></li>');
 }

function removeItem() {


}



$ (function() {
$('.add-button').on('click' , addItem);
});
    

$ (function() {
$('.trash').on('click' , removeItem);
});

