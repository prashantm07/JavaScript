// creting one function for sorting
// arrow function
const sortUserCards = () => {
    // get seleted sorting option
    const sortOption = document.getElementById("sortOption").value;
    //   container holds the users
    const userCardContainer = document.getElementById("userCardContainer");
  
    //   convert collection user to array for sorting
    // const userCards = Array.from(userCardContainer.children);
    const userCards = [...userCardContainer.children];
  
    userCards.sort((a, b) => {
      const aValue = a.getAttribute(`${sortOption}`).toLowerCase(); // seleted option in drop down
      const bValue = (b.getAttribute(`${sortOption}`) || "").toLowerCase(); // seleted option in drop down
  
      // console.log(aValue,"****")
  
      if (sortOption === "name" || sortOption === "city") {
        return aValue.localeCompare(bValue, undefined, {
          sensitivity: "base",
        });
        // return aValue.localeCompare(bValue);
      } else {
        return parseFloat(aValue) - parseFloat(bValue);
        // return aValue - bValue;
      }
    });
  
    // change inner html of an element
    userCardContainer.innerHTML = "";
    // appendChild : add html element
    userCards.forEach((card) => userCardContainer.appendChild(card));
  };
  
  // Fetch user data from the JSON file
  fetch("data.json")
    .then((response) => response.json())
    .then((users) => {
      // Create user cards dynamically based on the JSON data
      const userCardContainer = document.getElementById("userCardContainer");
  
      users.forEach((user) => {
        // Create a new div element for each user card
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.setAttribute("name", user.name); // set attribute for name
        userCard.setAttribute("id", user.id); // set attribute for id
        userCard.setAttribute("age", user.age); // set attribute for age
        userCard.setAttribute("city", user.city); // set attribute city
  
        // Create the content for each user card using a template string
        const userCardContent = `
              <div class="user-card-content">
                <p>Name :${user.name}</p>
               <p>Age: ${user.age}</p>
                <p>City: ${user.city}</p>
              </div>
            `;
  
        // change inner html elemets
        userCard.innerHTML = userCardContent;
        // appendChild : add html element
        userCardContainer.appendChild(userCard);
      });
  
      // initial sorting based on id
      const sortOptionDropdown = document.getElementById("sortOption");
      sortOptionDropdown.value = "name";
  
      // Initial sorting by id
      sortUserCards();
    })
    .catch((error) => console.error("Error fetching user data:", error)); // for fetcing error
  