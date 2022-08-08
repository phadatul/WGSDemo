function hello() {
    var x = document.getElementById("mytxt").value;
    document.getElementById('mypara').innerHTML = x.toUpperCase();
    document.getElementById("mypara").style.color = "Red";
}

function add(a, b) {
    return a + b;
}

function showAlert() {
    alert("hello for an alert.....")
}