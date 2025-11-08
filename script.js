const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

document.getElementById("searchBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value;
  if (city.trim() === "") return alert("Please enter a city name");

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        document.getElementById("weatherResult").textContent = "City not found.";
      } else {
        document.getElementById("weatherResult").innerHTML = `
          <p><strong>${data.name}</strong></p>
          <p>${data.weather[0].description}</p>
          <p>🌡 ${data.main.temp} °C</p>
        `;
      }
    })
    .catch(error => console.error("Error:", error));
});
