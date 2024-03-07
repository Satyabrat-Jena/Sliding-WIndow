const panels = document.querySelectorAll(".panel");
const texts = document.querySelectorAll(".blur");

panels.forEach(panel => {
    panel.addEventListener("click", function() {
        removeClass();
        this.classList.add("active"); // 'this' refers to the clicked panel element
        removeParaClass(); // Remove the class "para" from all elements with the class "blur"
    });
    function removeClass() {
    panels.forEach(panel => {
        panel.classList.remove("active");
    });
}

function removeParaClass() {
    texts.forEach(text => {
        text.classList.toggle("para");
    });
}
});


