const url = "https://www.mocky.io/v2/58fda6ce0f0000c40908b8c8";
const content = document.querySelector("#content");
const placeholder = document.querySelector("#content-placeholder");
const p1btn = document.querySelector(".page1");
const p2btn = document.querySelector(".page2");
const p3btn = document.querySelector(".page3");
let click = false;

p1btn.addEventListener("click", () => {
	click = true;
	content.textContent = "";
	getNews();
});
p2btn.addEventListener("click", () => {
	click = true;
	content.textContent = "";
	getNewsSecond();
});
p3btn.addEventListener("click", () => {
	click = true;
	content.textContent = "";
	getNewsThird();
});

async function getNews() {
	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	});
	const data = await response.json();
	if (click === true) {
		for (let i = 0; i < data.news.length - 10; i++) {
			const title = document.createElement("h1");
			const details = document.createElement("p");
			title.textContent = data.news[i].title;
			details.textContent = data.news[i].details;
			placeholder.remove();
			content.append(title, details);
			p1btn.style.cssText =
				"background-color: lightblue; width: 1.8rem; height: 1.8rem;";
			p2btn.style = "";
			p3btn.style = "";
		}
	}
}

async function getNewsSecond() {
	const response = await fetch(url);
	const data = await response.json();
	if (click === true) {
		for (let i = 5; i < data.news.length - 5; i++) {
			const title = document.createElement("h1");
			const details = document.createElement("p");
			title.textContent = data.news[i].title;
			details.textContent = data.news[i].details;
			placeholder.remove();
			content.append(title, details);
			p2btn.style.cssText =
				"background-color: lightblue; width: 1.8rem; height: 1.8rem;";
			p3btn.style = "";
			p1btn.style = "";
		}
	}
}

async function getNewsThird() {
	const response = await fetch(url);
	const data = await response.json();
	if (click === true) {
		for (let i = 10; i < data.news.length; i++) {
			const title = document.createElement("h1");
			const details = document.createElement("p");
			title.textContent = data.news[i].title;
			details.textContent = data.news[i].details;
			placeholder.remove();
			content.append(title, details);
			p3btn.style.cssText =
				"background-color: lightblue; width: 1.8rem; height: 1.8rem;";
			p2btn.style = "";
			p1btn.style = "";
		}
	}
}
