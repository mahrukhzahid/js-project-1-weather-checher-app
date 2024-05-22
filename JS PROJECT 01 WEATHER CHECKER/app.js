var currentWeather = prompt("Enter Your Area Weather:cold,windy,stormy,rainy,sunny,snow,foggy");
document.write(
  "<body style= 'height:70vh; background-color:#3232;' oerflow:hidden;>" +
    "</body>"
);
if (currentWeather == "cold") {
  document.write(
    "<div class='card' style='width: 18rem; height:25rem; margin:auto; margin-top:14%; box-shadow: rgba(2, 4, 6, 0.65) 6px 7px 15px; '>" +
      "<img src='assets/cold.png' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:4rem;'>" +
      " COLD" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "windy") {
  document.write(
    "<div class='card' style='width: 18rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/windy.png' style ='width:14rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:4rem;'>" +
      "WINDY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "stormy") {
  document.write(
    "<div class='card' style='width: 18rem; height:24rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/stormy.png' style ='width:13rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:4rem;'>" +
      "STORMY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "rainy") {
  document.write(
    "<div class='card' style='width: 20rem; height:24rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 0, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/rainy.png' style ='width:19rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:3rem;'>" +
      "RAINY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "sunny") {
  document.write(
    "<div class='card' style='width: 20rem; height:18rem; margin:auto; margin-top:14%;box-shadow: rgba(30, 40, 7, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/sunny.png' style ='width:20rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:4rem;'>" +
      "SUNNY" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
} else if (currentWeather == "snow") {
  document.write(
    "<div class='card' style='width: 20rem; height:27rem; margin:auto; margin-top:14%;box-shadow: rgba(30, 40, 7, 0.65) 0px 5px 15px; '>" +
    "<img src='assets/snow.webp' style ='width:20rem; margin:auto;' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +
    "<h1 style='margin:auto; font-size:4rem;'>" +
    "SNOW" +
    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"
  );


} else if (currentWeather == "foggy") {
  document.write(
    "<div class='card' style='width: 20rem; height:27rem; margin:auto; margin-top:14%;box-shadow: rgba(30, 40, 7, 0.65) 0px 5px 15px; '>" +
    "<img src='assets/foggy.jpeg' style ='width:20rem; margin:auto;' class='card-img-top' alt='...>" +
    " <div class='card-body'>" +
    "<p class='card-text'>" +
    "<h1 style='margin:auto; font-size:4rem;'>" +
    "FOGGY" +
    "</h1>" +
    "</p>" +
    "</div>" +
    " </div>"
  );
















} else {
  document.write(
    "<div class='card' style='width: 19rem; height:25rem; margin:auto; margin-top:14%;box-shadow: rgba(0, 00, 0, 0.65) 0px 5px 15px; '>" +
      "<img src='assets/error.png' style ='width:13rem; margin:auto;' class='card-img-top' alt='...>" +
      " <div class='card-body'>" +
      "<p class='card-text'>" +
      "<h1 style='margin:auto; font-size:2rem;'>" +
      "NOT A WEATHER" +
      "</h1>" +
      "</p>" +
      "</div>" +
      " </div>"
  );
}