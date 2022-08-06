// 1.	Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// a.	A Bootstrap styled table representing your choice of data.
// b.	A Bootstrap styled form that allows a user to add a new row to the table when submitted.

document.getElementById("submit").onclick = function () {
    document.getElementById("table").style.display = "block";
  
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var desc = row.insertCell(0);
    var amt = row.insertCell(1);
    desc.innerHTML = document.getElementById("first").value;
    amt.innerHTML = document.getElementById("last").value;
  
    return false;
  }