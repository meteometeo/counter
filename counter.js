let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        
        if (styles.contains("decrease")) {
            count--;
        }

        if (styles.contains("reset")) {
            count = 0;
        }

        if (styles.contains("increase")) {
            count++;
        }

        if (count > 0) {
            value.style.color = "green";
        } 

        if (count < 0) {
            value.style.color = "red";
        }

        value.textContent = count;
    });
});