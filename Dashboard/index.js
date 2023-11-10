// const form = document.querySelector('form')

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const username = form.username.value;
//     const password = form.password.value;

//     const authenticated = authentication(username, password)

//     if(authenticated){
//         window.location.href = "Dashboard.html"
//     } else {
//         alert("wrong")
//     }
// })

// // function for checking username and password
// function authentication(username, password){
//     if(username === "admin" && password === "password") {
//         return true
//     } else {
//         return false
//     }
// }


// function logout() {
//     // localStorage.clear();
//     location.href = './index.html';
// }





	//Page cursors

  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px", 
t.style.top = n.clientY + "px", 
e.style.left = n.clientX + "px", 
e.style.top = n.clientY + "px", 
i.style.left = n.clientX + "px", 
i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2");
function n(t) {
    e.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-link"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

//Color change on scroll

$('.section li:nth-child(2)').on('mouseover', function(event) {				
$('body').addClass('color-cyan');
});				
$('.section li:nth-child(2)').on('mouseout', function(event) {			
$('body').removeClass('color-cyan');
});

$('.section li:nth-child(3)').on('mouseover', function(event) {				
$('body').addClass('color-red');
});				
$('.section li:nth-child(3)').on('mouseout', function(event) {			
$('body').removeClass('color-red');
});

$('.section li:nth-child(4)').on('mouseover', function(event) {				
$('body').addClass('color-blue');
});				
$('.section li:nth-child(4)').on('mouseout', function(event) {			
$('body').removeClass('color-blue');
});

$('.section li:nth-child(5)').on('mouseover', function(event) {				
$('body').addClass('color-yellow');
});				
$('.section li:nth-child(5)').on('mouseout', function(event) {			
$('body').removeClass('color-yellow');
});

$('.section li:nth-child(6)').on('mouseover', function(event) {				
$('body').addClass('color-violet');
});				
$('.section li:nth-child(6)').on('mouseout', function(event) {		
$('body').removeClass('color-violet');
});

$('.section li:nth-child(7)').on('mouseover', function(event) {				
$('body').addClass('preload');
});				
$('.section li:nth-child(7)').on('mouseout', function(event) {		
$('body').removeClass('preload');
});

$('.section li:nth-child(8)').on('mouseover', function(event) {				
$('body').addClass('preload1');
});				
$('.section li:nth-child(8)').on('mouseout', function(event) {		
$('body').removeClass('preload1');
});

$('.section li:nth-child(9)').on('mouseover', function(event) {				
$('body').addClass('preload2');
});				
$('.section li:nth-child(9)').on('mouseout', function(event) {		
$('body').removeClass('preload2');
});

$('.section li:nth-child(10)').on('mouseover', function(event) {				
$('body').addClass('bars');
});				
$('.section li:nth-child(10)').on('mouseout', function(event) {		
$('body').removeClass('bars');
});










function logout() {
    // localStorage.clear();
    window.location.href = './index.html';
    console.log("logout");
}


const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});



// Theme Change
themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variable");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("remove");
});
console.log(Orders[1].productName);
console.log(Orders[2].productName);
Orders.forEach((Orders) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${Orders.productName}</td>
        <td>${Orders.productNumber}</td>
        <td>${Orders.paymentStatus}</td>
        <td class="${
          Orders.shipping === "Declined"
            ? "danger"
            : Orders.shipping === "pending"
            ? "warning"
            : "primary"
        }">${Orders.shipping}</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
  console.log(tr);
});
