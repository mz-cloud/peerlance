document.querySelectorAll(".heart").forEach((element) => {
  element.addEventListener("click", () => {
    const regularHeart = element
      .closest(".featured-seller-card")
      .querySelector(".regular");
    const solidHeart = element
      .closest(".featured-seller-card")
      .querySelector(".solid");

    if (element.classList.contains("regular")) {
      regularHeart.classList.add("hidden");
      solidHeart.classList.remove("hidden");
    } else {
      solidHeart.classList.add("hidden");
      regularHeart.classList.remove("hidden");
    }
  });
});
