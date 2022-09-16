// const input = document.querySelector("input");
// const button = document.querySelector("button");
// const toDoList = document.querySelector(".toDoList");

// button.onclick = () => {
// 	const li = document.createElement("li");
// 	li.innerHTML = input.value;
// 	toDoList.appendChild(li);
// 	input.value = "";
// 	li.onclick = () => {
// 		li.style.textDecoration = "line-through";
// 	};
// 	li.ondblclick = () => {
// 		li.remove();
// 	};
// 	localStorage.setItem("list", toDoList.innerHTML);
// };

// if (localStorage.getItem("list")) {
// 	toDoList.innerHTML = localStorage.getItem("list");
// }

// input.addEventListener("keypress", function (event) {
// 	if (event.key === "Enter") {
// 		button.click();
// 	}
// });

const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");
const toDoList = document.querySelector("#toDoList");
let arr = ["a", "b", "c"];

addBtn.onclick = () => {
	if (!input.value) {
		alert("Please, fill the empty space!");
	} else {
		const task = document.createElement("div");
		task.className = "task rounded bg-secondary d-flex justify-content-between w-10 align-items-center px-2 py-1 m-2";

		const p = document.createElement("p");
		p.className = "mx-1";
		p.innerHTML = input.value;

		const wrapper = document.createElement("div");
		wrapper.className = "d-flex justify-content-around";

		const removeBtn = document.createElement("button");
		removeBtn.className = "btn bg-danger mx-1";
		removeBtn.innerHTML = '<i class="fa-solid fa-trash text-white">';

		const doneBtn = document.createElement("button");
		doneBtn.className = "btn bg-primary text-white mx-1";
		doneBtn.innerHTML = "Done";

		wrapper.appendChild(removeBtn);
		wrapper.appendChild(doneBtn);
		task.appendChild(wrapper);
		task.appendChild(p);
		// toDoList.appendChild(task);
		// arr.push(task);
		stringifiedArr = JSON.stringify(arr);
		localStorage.setItem('arr', stringifiedArr);

		removeBtn.onclick = () => {
			task.remove();
		};

		doneBtn.onclick = () => {
			if (task.className === "task rounded bg-secondary d-flex justify-content-between w-10 align-items-center px-2 py-1 m-2") {
			task.className = "task rounded bg-success d-flex justify-content-between w-10 align-items-center px-2 py-1 m-2";
			doneBtn.innerHTML = "Undone";
		} else {
			task.className = "task rounded bg-secondary d-flex justify-content-between w-10 align-items-center px-2 py-1 m-2";
			doneBtn.innerHTML = "Done";
		}
		};

		input.value = "";
	}
};


		retrieved = localStorage.getItem('arr');
		parsedArr = JSON.parse(retrieved);
		console.log(parsedArr);
		// toDoList.appendChild(task);


// if (localStorage.getItem('task')) {
// toDoList.innerHTML = localStorage.getItem('task');

// }

input.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		addBtn.click();
	}
});
