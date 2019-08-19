/******************************
 ****    CSS Drag & Drop   ****
 ******************************/

// Drag & Drop
$(function () {
    console.log('Thanks for using CSS-DnD!')
    onDragEnter($('.dnd-droppable'));
    onDragStart($('.dnd-draggable'));
    onDragOver($('.dnd-droppable'));
    onDragEnd($('.dnd-droppable'));
    onDragLeave($('.dnd-droppable'));
    onDrop($('.dnd-droppable'));
});
$(function () {
    $('.dnd-draggable').each(function (index) {
        $(this).attr('id', 'dnd-drgraggable-item_' + index).attr('draggable', 'true');
    });
});
// DnD functions
const onDrop = function (selector) {
    selector.on('drop', function (ev) {
        ev.preventDefault();
        const id = ev.originalEvent.dataTransfer.getData('text');
        const node = $(document.getElementById(id));
        ev.target.appendChild(node[0]);
    })
};
const onDragOver = function (selector) {
    selector.on('dragover', function (ev) {
        ev.preventDefault();
        $(this).addClass('dnd--dragging')
    })
};
const onDragEnter = function (selector) {
    selector.on('dragenter', function (ev) {
        ev.preventDefault();
    })
}; 
const onDragStart = function (selector) {
    selector.on('dragstart', function (ev) {
        ev.originalEvent.dataTransfer.setData('text', ev.target.id);
    })
};
const onDragEnd = function (selector) {
    selector.on('dragend', function (ev) {
       $(this).removeClass('dnd--dragging')
    })
};
const onDragLeave = function (selector) {
    selector.on('dragleave', function (ev) {
        $(this).removeClass('dnd--dragging')
    })
};
// ---