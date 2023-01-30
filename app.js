(function () {
  "use strict";

  const title = document.getElementById("title");
  const button = document.getElementById("button");

  button.addEventListener("click", () => {
    // This line will throw an error because the property does not exist
    title.textContentt = "Hello World";
    console.log("Heading is now 'Hello World'");
  });

  fetch("https://nonexistent-api.com/data")
    .then((res) => {
      console.log("Data fetched successfully");
      return res.json();
    })
    .catch((error) => {
      console.error("Network error: ", error);
    });
})();
