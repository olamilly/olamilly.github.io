const myArrayKey = "todoItems";

function setLocalStorageArray(key, array) {
	localStorage.setItem(key, JSON.stringify(array));
}

function checkIfLocalStorageArrayExists() {
	const storedData = localStorage.getItem(myArrayKey);
	if (!storedData) {
		setLocalStorageArray(myArrayKey, []);
	} else {
		updateDOMList(getLocalStorageArray(myArrayKey));
	}
}

function getLocalStorageArray(key) {
	const storedData = localStorage.getItem(key);
	if (storedData) {
		return JSON.parse(storedData);
	}
	return [];
}

function createTodoListItem(item, index) {
	const li = document.createElement("li");
	li.className = `d-flex justify-content-between align-items-center my-2 px-2 ${item.priority}`;

	const a = document.createElement("a");
	a.className = "dropdown-item d-flex h-100 align-items-center gap-2 py-2";

	const div1 = document.createElement("div");
	div1.className =
		"d-flex flex-column align-items-start justify-content-center";

	const p = document.createElement("p");
	p.className = "mb-0 strong ";
	p.textContent = item.name;

	const small = document.createElement("small");
	small.className = "fw-light ";
	small.textContent = item.description;
	if (item.done) {
		small.classList.add("text-decoration-line-through");
		small.classList.add("done");
		p.classList.add("text-decoration-line-through");
		p.classList.add("done");
	}

	div1.appendChild(p);
	div1.appendChild(small);
	a.appendChild(div1);

	const div2 = document.createElement("div");
	div2.className = "form-check";

	const input = document.createElement("input");
	input.type = "checkbox";
	input.className = "form-check-input";
	input.id = index;
	input.checked = item.done;

	const i = document.createElement("i");
	i.className = "bx bx-trash";
	i.id = index;

	div2.appendChild(input);
	div2.appendChild(i);

	li.appendChild(a);
	li.appendChild(div2);

	return li;
}

function updateDOMList(a) {
	const ulElement = document.querySelector("ul");
	if (a.length == 0) {
		document.querySelector("h1").classList.add("d-none");
		document
			.querySelector(".card-body-title")
			.classList.remove("justify-content-between");
		document
			.querySelector(".card-body-title")
			.classList.add("justify-content-center");
	} else {
		document.querySelector("h1").classList.remove("d-none");
		document
			.querySelector(".card-body-title")
			.classList.add("justify-content-between");
		document
			.querySelector(".card-body-title")
			.classList.remove("justify-content-center");
	}
	ulElement.innerHTML = "";
	let newArray = a.sort((x, y) => y.priority_number - x.priority_number);
	newArray.forEach((item) => {
		const newListItem = createTodoListItem(item, newArray.indexOf(item));
		ulElement.appendChild(newListItem);
	});
	document.querySelectorAll(".bx").forEach((i) => {
		i.addEventListener("click", (e) => {
			removeObjectFromLocalStorage(myArrayKey, e.target.id);
		});
	});
	document.querySelectorAll("li>.form-check>.form-check-input").forEach((i) => {
		i.addEventListener("click", (e) => {
			toggleComplete(e);
		});
	});
}
function addObjectToLocalStorage(key, object) {
	const array = getLocalStorageArray(key);
	array.push(object);
	updateDOMList(array);
	setLocalStorageArray(key, array);
}

function toggleComplete(e) {
	const a = getLocalStorageArray(myArrayKey);
	if (e.target.id !== -1) {
		a[e.target.id]["done"] = !a[e.target.id]["done"];
		updateDOMList(a);
		setLocalStorageArray(myArrayKey, a);
	}
}
function removeObjectFromLocalStorage(key, index) {
	const array = getLocalStorageArray(key);
	if (index !== -1) {
		array.splice(index, 1);
		updateDOMList(array);
		setLocalStorageArray(key, array);
	}
}

function getCurrentDateTime() {
	const now = new Date();
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
	};
	const formattedDateTime = now.toLocaleString("en-US", options);
	const dateAndTime = formattedDateTime.split(" at ");
	document.getElementById("date").textContent = dateAndTime[0];
	document.getElementById("time").textContent = dateAndTime[1];
}

function checkTaskInput(e) {
	if (e.target.value.length > 0) {
		document.getElementById("addTask").disabled = false;
	} else {
		document.getElementById("addTask").disabled = true;
	}
}

function saveTask() {
	let task = {};
	task["name"] = document.getElementById("taskName").value;
	task["description"] = document.getElementById("description").value;
	document.querySelectorAll(".form-check-input").forEach((i) => {
		if (i.checked) {
			task["priority"] = i.value;
		}
		i.checked = false;
	});
	task["done"] = false;
	switch (task["priority"]) {
		case "low":
			task["priority_number"] = 1;
			break;
		case "medium":
			task["priority_number"] = 2;
			break;
		case "high":
			task["priority_number"] = 3;
			break;
		case "urgent":
			task["priority_number"] = 4;
			break;
		default:
			task["priority_number"] = 4;
	}
	addObjectToLocalStorage(myArrayKey, task);
	getLocalStorageArray(myArrayKey);
	document.getElementById("taskName").value = "";
	document.getElementById("description").value = "";
	document.getElementById("low").checked = true;
}
let myInterval;
function startInterval() {
	getCurrentDateTime();
	myInterval = setInterval(() => {
		getCurrentDateTime();
	}, 10000);
}

window.addEventListener("DOMContentLoaded", startInterval);
window.addEventListener("beforeunload", () => {
	clearInterval(myInterval);
});
document.addEventListener("DOMContentLoaded", checkIfLocalStorageArrayExists);
