const buttons = document.querySelectorAll(".dropdown-button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const dropdowns = document.querySelectorAll(".dropdown-content");
    const dropdownId = this.getAttribute("id").replace("-button", "");
    const dropdown = document.querySelector(`#${dropdownId}`);
    if (dropdown.classList.contains("hidden")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
      dropdown.classList.remove("hidden");
    } else {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.add("hidden");
      });
    }
  });
});

document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".dropdown-content");
  dropdowns.forEach((dropdown) => {
    if (
      !dropdown.contains(event.target) &&
      !event.target.classList.contains("dropdown-button")
    ) {
      dropdown.classList.add("hidden");
    }
  });
});
