const task3Element = document.getElementById("task-3");

function showAlert() {
  alert(showCombinedStrings('My ', "name is ", 'Laura'));
}

function showName(name) {
  alert(name);
}

function showCombinedStrings(string1, string2, string3) {
    const fullString = string1 + string2 + string3;
    return fullString
}

showAlert();
showName("Laura");

task3Element.addEventListener('click', showAlert)
