for(let i=0; i < document.querySelectorAll(".rating-btn").length; i++){
    document.querySelectorAll(".rating-btn")[i].addEventListener("click", selectedButtonColor);
}

var selectedRating = 0;

function selectedButtonColor() {

    selectedButton = this.innerHTML;
    switch(selectedButton){
        case "1":
            removeBlackBackground();
            this.classList.add("black-background");
            selectedRating = selectedButton;
            break;

        case "2":
            removeBlackBackground();
            this.classList.add("black-background");
            selectedRating = selectedButton;
            break;

        case "3":
            removeBlackBackground();
            this.classList.add("black-background");
            selectedRating = selectedButton;
            break;


        case "4":
            removeBlackBackground();
            this.classList.add("black-background");
            selectedRating = selectedButton;
            break;


        case "5":
            removeBlackBackground();
            this.classList.add("black-background");
            selectedRating = selectedButton;
            break;
    }

    console.log(selectedRating);
}

function removeBlackBackground(){
    for(let i=0; i < document.querySelectorAll(".rating-btn").length; i++){
        document.querySelectorAll(".rating-btn")[i].classList.remove("black-background");
    }
}

// Adding Event Listener to SUbmit button

document.querySelector(".submit-btn").addEventListener("click", function(){
    if(selectedRating >= 1){
        document.querySelector("#rating-state").classList.add("make-invisible");
        document.querySelector("#thank-you-state").classList.remove("make-invisible");
        document.querySelector("#thank-you-state").classList.add("make-visible");
        document.getElementsByClassName("rating-selection-message")[0].innerText = "You selected " + selectedRating + " out of 5";
    } 
    else{
        alert("Please select a rating before submitting.");
    }
});




//Thank you state Message