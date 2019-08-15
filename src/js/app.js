import * as $ from 'jquery'

/******************************
 ****    CSS Drag & Drop   ****
 ******************************/ 

// Drag & Drop
$(function () {
    console.log('thanks for using css-dnd!')
    onDragEnter($('.item-droppable'));
    onDragStart($('.item-draggable'));
    onDragOver($('.item-droppable'));
    onDrop($('.item-droppable'));
});
// DnD functions
const onDrop = function (selector) {
    selector.on('drop', function (ev) {
        ev.preventDefault();
        const id = ev.originalEvent.dataTransfer.getData("text");
        const node = $(document.getElementById(id));
        ev.target.appendChild(node[0]);
    })
};
const onDragOver = function (selector) {
    selector.on('dragover', function (ev) {
        ev.preventDefault();
    })
};
const onDragEnter = function (selector) {
    selector.on('dragenter', function (ev) {
        ev.preventDefault();
    })
};
const onDragStart = function (selector) {
    selector.on('dragstart', function (ev) {
        console.log('dragging')
        ev.originalEvent.dataTransfer.setData("text", ev.target.id);
    })
};
// ---