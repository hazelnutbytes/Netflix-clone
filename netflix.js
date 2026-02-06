// ---------- MODAL LOGIC ----------
const modal = document.getElementById("sign");
const openBtn = document.getElementById("sign-btn");
const closeBtn = document.getElementById("close");

openBtn.addEventListener("click", () => {
    modal.classList.add("show-modal");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show-modal");
});

// ---------- MOVIE CARDS ----------
document.addEventListener("DOMContentLoaded", () => {

    const cardsData = [
        {
            title: "Taskaree",
            image: "https://occ-0-8974-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdMV-HZH6NUQ4JzFQwMEwjBSPGMpK6LyHgHQA--Ltd61GC5AD4uc7CTp_c7knmrBLo5he7BkKB1jK7q5vG4jZWaZRtHjWxxUTnczNbIDnZabra5ociBeiC-bcNRC1BMyf8Zl.jpg?r=f34"
        },
        {
            title: "Stranger Things",
            image: "https://occ-0-8974-2164.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVwkctHoZyXX6x_Wh9ZoVju5V4_FsQpH0O4FmVxA5gQak9__L6X8OV0HBUaKnNLEe1VsXAOZDZmReBW8xLKNTBlXHs4h-llwpiBovnFEX_9QTQYqjZ0Hai2pZSdzgoYilvYw.jpg?r=e8a"
        },
        {
            title: "Tere Ishq Mein",
            image: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Tere_Ishk_Mein_poster.jpg/250px-Tere_Ishk_Mein_poster.jpg"
        }
    ];

    const cardContainer = document.querySelector(".movie-row");

    cardsData.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;

        cardContainer.appendChild(card);
    });
});

// ---------- WAIT FOR DOM ----------
document.addEventListener("DOMContentLoaded", () => {

    const continueBtn = document.getElementById("continueBtn");
    const loginBtn = document.getElementById("loginBtn");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");
    const emailStep = document.getElementById("emailStep");
    const passwordStep = document.getElementById("passwordStep");
    const loginErrorEmail = document.getElementById("loginErrorEmail");
    const loginErrorPassword = document.getElementById("loginErrorPassword");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    continueBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        if (email === "") {
            loginErrorEmail.style.display = "block";
            loginErrorEmail.textContent = "Please enter your email!";
        } else if (!emailPattern.test(email)) {
            loginErrorEmail.style.display = "block";
            loginErrorEmail.textContent = "Please enter a valid email!";
        } else {
            loginErrorEmail.style.display = "none";
            loginErrorEmail.textContent = "";
            emailStep.style.display = "none";
            passwordStep.style.display = "block";
        }
    });

    loginBtn.addEventListener("click", () => {
        const password = passwordInput.value.trim();

        if (password === "") { // original check
            loginErrorPassword.style.display = "block";
            loginErrorPassword.textContent = "Please enter your password!";
        } 
        else if (!/[A-Z]/.test(password)) { // uppercase
            loginErrorPassword.style.display = "block";
            loginErrorPassword.textContent = "Password must contain at least 1 uppercase letter!";
        } 
        else if (!/[a-z]/.test(password)) { // lowercase
            loginErrorPassword.style.display = "block";
            loginErrorPassword.textContent = "Password must contain at least 1 lowercase letter!";
        } 
        else if (!/[0-9]/.test(password)) { // number
            loginErrorPassword.style.display = "block";
            loginErrorPassword.textContent = "Password must contain at least 1 number!";
        } 
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) { // special character
            loginErrorPassword.style.display = "block";
            loginErrorPassword.textContent = "Password must contain at least 1 special character!";
        } 
        else { // if all conditions pass
            loginErrorPassword.style.display = "none";
            loginErrorPassword.textContent = "";
            alert("Login successful!");
            modal.classList.remove("show-modal");
            emailStep.style.display = "block";
            passwordStep.style.display = "none";
            emailInput.value = "";
            passwordInput.value = "";
        }
    });

});
