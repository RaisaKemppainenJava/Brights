const allGnomes = [
	{ file: "garden.jpg", description: "garden gnome", price: 400 },
	{ file: "lady.jpg", description: "lady gnome", price: 120 },
	{ file: "laugh.jpg", description: "laughing gnome", price: 300 },
	{ file: "military.jpg", description: "military gnome", price: 240 },
	{ file: "red-hat.jpg", description: "red hat", price: 10 },
	{ file: "summer.jpg", description: "double summer", price: 80 },
];

const resultArea = document.querySelector(".likes");
const inputFood = document.querySelector(".food");

//LEVEL 1
function inputChanged() {
	const foodStr = inputFood.value;
	const likesStr = "The gnome likes ";

	if (foodStr === "") {
		resultArea.classList.remove("frame");
		resultArea.innerText = "The gnome doesn't like anything ";
	} else {
		resultArea.classList.add("frame");
		resultArea.innerText = likesStr + foodStr;
	}
}

//LEVEL 2
//Create all objects to a own row and print out.
for (let index = 0; index < allGnomes.length; index++) {
	//Creating a div for gnome row
	const div = document.createElement("div");
	document.querySelector(".gnomeResult").appendChild(div);
	div.classList.add("row");
	let gnomeRow = document.querySelectorAll(".row");

	//Adding image to .row
	const img = document.createElement("img");
	img.src = "gnomes/" + allGnomes[index].file;
	gnomeRow[index].appendChild(img);

	//Adding div for description to row
	const gnomeDescription = document.createElement("div");
	gnomeRow[index].appendChild(gnomeDescription);
	gnomeDescription.classList.add("description");
	gnomeDescription.innerText = allGnomes[index].description;

	//Adding div price to row
	const gnomePrice = document.createElement("div");
	gnomeRow[index].appendChild(gnomePrice);
	gnomePrice.classList.add("price");
	gnomePrice.innerText = allGnomes[index].price + " kr";
}

function searchGnomes() {
	let input = document.querySelector(".searchText").value.toLowerCase();
	let descriptions = document.querySelectorAll(".description");
	let gnomes = document.querySelectorAll(".row");

	//If input is not the same as the description name of the gnome, then hide the gnome. Else display.
	for (i = 0; i < descriptions.length; i++) {
		if (!descriptions[i].innerHTML.toLowerCase().includes(input)) {
			gnomes[i].style.display = "none";
		} else {
			gnomes[i].style.display = "";
		}
	}
}
