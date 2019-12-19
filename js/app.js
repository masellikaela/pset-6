window.onload = function() {
    document.getElementById("addItem").onclick = items;
}

const items = function() {
    const drawing = document.getElementById("student-canvas-1").getContext("2d");
    let addItem = ("")

    if (addItem !== null){
        addItem = prompt("Add an item to your list: ")
        addItem.font = "72px sans-serif";
        drawing.fillText(addItem, 40, 80, 1024);


    } else {
      drawing.clearRect(0, 0, 1024, 1024);

    }

  };
