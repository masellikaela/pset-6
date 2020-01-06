window.onload = function() {
    document.getElementById("add-button").onclick = additems;

}

const items = [];

const setListeners = function(id) {
  document.getElementById(id).addEventListener('click', function() {
    if (id.startWith("priority")) {
      var mark = document.getElementById("priority");
      if (mark.class = "highPriority priorityIndicator") {
        mark.class = "normalPriority priorityIndicator"
      } else if (mark.class = "normalPriority priorityIndicator") {
        mark.class = "highPriority priorityIndicator";
      }
    } else if (id.startWith("check")) {

    } else if (id.startWith("x")) {

    }
  })
}

const additems = function() {
  const text = document.getElementById("textbox").value;

  const item = {
    id: items.length + 1,
    priority: "low",
    content: text,
    complete: false,
    removed: false
  };
  items.push(item);

  document.getElementById("textbox").value = "";

  renderItems();
};

const renderItems = function() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    var priority = document.createElement("span");
    var listItem = document.createElement("span");
    var check = document.createElement("span");
    var x = document.createElement("span");

    priority.innerHTML = "!";
    var idNum = 1;
    var prevId;
    try {
      while (true) {
        prevId = document.getElementById("priority" + String(idNum));
        idnum++;
      }
    } catch (e) {
      priority.id = "priority" + String(idNum);
    }
    priority.class = "normalPriority priorityIndicator";
    listItem.innerHTML = items[i].content;
    listItem.id= "item";
    check.innerHTML = "&#10004;";
     idNum = 1;
     prevId;
    try {
      while (true) {
        prevId = document.getElementById("check" + String(idNum));
        idnum++;
      }
    } catch (e) {
      priority.id = "check" + String(idNum);
    }
    check.className = items[i].complete === true ? "done" : "not-done";
    x.innerHTML = "&#10006;";
     idNum = 1;
     prevId;
    try {
      while (true) {
        prevId = document.getElementById("x" + String(idNum));
        idnum++;
      }
    } catch (e) {
      priority.id = "x" + String(idNum);
    }


    li.append(priority);
    li.append(listItem);
    li.append(check);
    li.append(x);
    list.append(li);
  }
};
