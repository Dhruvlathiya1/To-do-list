var input =  document.getElementById("inputtodo");
var add = document.getElementById("addtodo");
var list = document.getElementById("list");

add.addEventListener("click", function() {
	event.preventDefault();
	var listvalue = document.createElement("li");
	listvalue.classList.add("li")
	listvalue.textContent = input.value;
	list.appendChild(listvalue);
	listvalue.style.textDecoration = "underline";
	input.value = "";
	listvalue.addEventListener("click", function() {
	listvalue.style.textDecoration = "line-through";
})
	listvalue.addEventListener("dblclick", function() {
	list.removeChild(listvalue);
})
});

