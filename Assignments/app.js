const sortUserCards = () => {
  const sortOption = document.getElementById("sortOption").value;
  const userCardContainer = document.getElementById("userCardContainer");

  const userCards = [...userCardContainer.children];

  userCards.sort((a, b) => {
    const aValue = a.getAttribute(`${sortOption}`).toLowerCase(); // seleted option in drop down
    const bValue = (b.getAttribute(`${sortOption}`) || "").toLowerCase(); // seleted option in drop down

    if (sortOption === "name" || sortOption === "city") {
      return aValue.localeCompare(bValue, undefined, {
        sensitivity: "base",
      });
    } else {
      return parseFloat(aValue) - parseFloat(bValue);
    }
  });

  userCardContainer.innerHTML = "";
  userCards.forEach((card) => userCardContainer.appendChild(card));
};

fetch("data.json")
  .then((response) => response.json())
  .then((users) => {
    const userCardContainer = document.getElementById("userCardContainer");

    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.className = "user-card";
      userCard.setAttribute("name", user.name); // set attribute for name
      userCard.setAttribute("id", user.id); // set attribute for id
      userCard.setAttribute("age", user.age); // set attribute for age
      userCard.setAttribute("city", user.city); // set attribute city

      const userCardContent = `
            <div class="user-card-content">
              <p>Name :${user.name}</p>
             <p>Age: ${user.age}</p>
              <p>City: ${user.city}</p>
            </div>
          `;

      userCard.innerHTML = userCardContent;
      userCardContainer.appendChild(userCard);
    });

    const sortOptionDropdown = document.getElementById("sortOption");
    sortOptionDropdown.value = "name";

    sortUserCards();
  })
  .catch((error) => console.error("Error fetching user data:", error)); // for fetcing error
