function onDragStart(event){
    let fun='onDragStart1';
    this[fun](event);
}

function onDragStart1(event) {
    event
        .dataTransfer
        .setData('text/plan', event.target.id);
    event
        .currentTarget
        .style
        .backgroundColor = 'green';
}
function onDrop(event) {
    const id=event.dataTransfer.getData('text/plan');
    const dragElem=document.getElementById(id);
    const dropZone=event.target;
    dropZone.appendChild(dragElem);
    event.dataTransfer.clearData();
}
function onDragOver(event) {
    event.preventDefault();
}