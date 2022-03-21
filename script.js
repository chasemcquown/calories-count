// identify the button container
const btnContainer = document.querySelector("#btn-container")

function eventHandler(event) {

    // stops page from refreshing
    event.preventDefault()

    //identify element value
    let calories = event.path[0].value

    document.querySelector("#scorecard").innerHTML = calories
}

//listen for click event on btn container
btnContainer.addEventListener("click", eventHandler)