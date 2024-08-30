

function errorThrow() {

    let inputValue = document.getElementById("UserNameInput").value;
    console.log(inputValue)
    if(inputValue === ""){
        console.log("true")

        document.getElementById("errorMassage").style.display = "block";

    }else{
        console.log("false")
        document.getElementById("errorMassage").style.display = "block";
}
};



window.onload = function() {

    const myButton = document.getElementById('cleerError');

    if (myButton) {
        myButton.addEventListener('click', function() {
            document.getElementById("errorMassage").style.display = "none";
            console.log("asdasd")

        });
    }
};