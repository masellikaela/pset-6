window.onload = function() {
    document.getElementById("addItem").onclick = additems;
}

const additems = function() {
    const drawing = document.getElementById("student-canvas-1").getContext("2d");
    let addItem = ("")

    if (addItem !== null){
        addItem.font = "72px sans-serif";
        drawing.fillText(addItem, 40, 80, 1024);
    } else {
      drawing.clearRect(0, 0, 1024, 1024);
    }


  };
