const routes = {
	"/": {
		template: "/templates/index.html",
	},
	about: {
		template: "/templates/about.html",
	},
	contact: {
		template: "/templates/contact.html",
	},
};
const locationHandler = async () => {
	var location = window.location.hash.replace("#", "");
	if (location.length == 0) {
		location = "/";
	}
	const route = routes[location] || routes["404"];
	const html = await fetch(route.template).then((response) => response.text());
	document.getElementById("content").innerHTML = html;
	document.title = route.title;
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
window.addEventListener("hashchange", locationHandler);
locationHandler();

let variableValue = "Kezdeti érték";
const inputField = document.getElementById("inputField");
const inputNew = document.getElementById("inputNew");
inputField.value = variableValue;
inputField.addEventListener("input", function() {
    variableValue = inputField.value;
	//console.log("Az új érték: " + variableValue);
inputNew.value = variableValue;
   
});
