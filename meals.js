let selectedRecipe = "";

function addToPlanner(recipe) {

    selectedRecipe = recipe;

    alert(recipe + " selected!");

    document.getElementById("planner").scrollIntoView({
        behavior: "smooth"
    });
}

function selectMeal(day) {

    if (selectedRecipe === "") {
        alert("First select a recipe!");
        return;
    }

    document.getElementById(day).innerText = selectedRecipe;

    alert(selectedRecipe + " added to " + day);
}

function searchRecipes() {

    let input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    let cards = document.querySelectorAll(".recipe-card");

    cards.forEach(function(card) {

        let recipeName = card
            .querySelector("h3")
            .innerText
            .toLowerCase();

        if (recipeName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}