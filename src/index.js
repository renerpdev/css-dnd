import * as $ from 'jquery'
import "./js/app"

/******************************
 ****    CSS Drag & Drop   ****
 ******************************/

// Drag & Drop Initialization
$(function () {
    console.log('Thanks for using CSS-DnD!');
    $('.dnd-droppable').droppable();
    $('.dnd-draggable').draggable();
});