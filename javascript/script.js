let width = window.innerWidth;
console.log(width)
if (width < 600) {
    let text = document.querySelector(".text");
    text.innerHTML = `I am a motivated and versatile individual, always eager to take on newchallenges. With a passion for learning I am dedicated to delivering high-quality results.`
}

document.querySelector(".hamburger").addEventListener("click", () => {
    console.log("clicked")
    let hamburger = document.querySelector(".lef")
    console.log(hamburger)
    hamburger.style.transform = `translateY(0px)`;
    let burger = document.querySelector(".hamburger");
    burger.style.display = "none"
})

document.querySelector(".cross").addEventListener("click", () => {
    console.log("clicked")
    let hamburger = document.querySelector(".lef")
    console.log(hamburger)
    hamburger.style.transform = `translateY(-300px)`;
    let burger = document.querySelector(".hamburger");
    burger.style.display = "inline-block"
})

function sendEmail(e) {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        body: document.getElementById("body").value,
    }

    emailjs.send("service_6s34xjr", "template_kkjj6rj", params).then(alert("Email Sent"))
}

var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4000);