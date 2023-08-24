const userEmail = document.getElementById("email");
const userFirstName = document.getElementById("first_name");
const userLastName = document.getElementById("last_name");
const userAvatar = document.getElementById("avatar");

(async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();

    // getting the fetching data
    const userData = data.data[5];

    // taking the data information and element
    const email = userData.email;
    const firstName = userData.first_name;
    const lastName = userData.last_name;
    const avatar = userData.avatar;

    // displaying
    userEmail.innerText = "Email: " + email;
    userFirstName.innerText = "First Name: " + firstName;
    userLastName.innerText = "Last Name: " + lastName;
    userAvatar.src = avatar;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})();
