const apiKey = "e5ae3eef91b3d790b626813abcf25aab";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.getElementById("city-input");
const searchBtn = document.getElementById("search-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const iconEl = document.getElementById("weather-icon");
const errorEl = document.getElementById("error-msg");
const weatherCard = document.querySelector(".weather-card");

function checkWeather(city) {
    fetch(apiUrl + city + `&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found.");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("city").textContent = data.name;
            document.getElementById("temp").textContent = Math.round(data.main.temp);
            document.getElementById("humidity").textContent = data.main.humidity;
            document.getElementById("desc").textContent = data.weather[0].description;
            
            iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            iconEl.style.display = "block";

            weatherCard.style.display = "block";
            errorEl.style.display = "none";
        })
        .catch(error => {
            console.error("Error detected :", error);
            errorEl.style.display = "block";
            weatherCard.style.display = "none";
        });
}

function toggleTheme() {
    if (body.classList.contains("day-theme")) {
        body.classList.replace("day-theme", "night-theme");
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Day Mode';
    } else {
        body.classList.replace("night-theme", "day-theme");
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Night Mode';
    }
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchInput.value);
    }
});

themeToggleBtn.addEventListener("click", toggleTheme);

checkWeather("New York");