console.log("Hello from JavaScript!");

// const btnBlue = document.querySelector(".btn-blue");
// const btnGreen = document.querySelector("#btn-green");
// const btnGreenId = document.getElementById("btn-green");
// console.log(btnGreenId);

// const abba = ['Bjorn', 'Benny', 'Anni-frid', 'Agnetha'];
// const container = document.querySelector(".container");
// let liContent = "";

// abba.forEach((member) => {
//   // console.log(member);
//   // console.log(liContent);
//   liContent += `<li>${member}</li>`;
// });


// const ulContent = `<ul>${liContent}</ul>`;
// container.insertAdjacentHTML("beforeend", ulContent);


// const elements = document.querySelectorAll("li");
// elements.forEach((element) => {
//   console.log(element);
//   element.innerText += '🎵';
// });

// const agnetha = document.getElementById("agnetha");
// console.log(agnetha.dataset.instrument);

// const abba = document.querySelectorAll(".abba");

// abba.forEach((member) => {
//   console.log(member.dataset.instrument);
//   member.innerText += `: ${member.dataset.instrument}`;
// });

// const romain = document.getElementById('romain');

// romain.addEventListener("click", (event) => {
//   console.log(event.currentTarget);
// });

// const imgs = document.querySelectorAll("img");

// imgs.forEach((img) => {
//   img.addEventListener("click", (event) => {
//     console.log(event.currentTarget);
//     event.currentTarget.classList.toggle("img-circle");
//   });
// });

// const link = document.querySelector("#link");

// link.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Clicked the link!");
// })

const button = document.querySelector(".btn-light");

button.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".form-check-input");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
    console.log(checkbox.checked);
  });
});