const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
})


// Theme Change 
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variable');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('remove');
})
console.log(Orders[1].productName)
console.log(Orders[2].productName)
Orders.forEach(Orders => {
    const tr = document.createElement('tr')
    const trContent = `
        <td>${Orders.productName}</td>
        <td>${Orders.productNumber}</td>
        <td>${Orders.paymentStatus}</td>
        <td class="${Orders.shipping === 'Declined' ? 'danger' : Orders.shipping === 'pending' ? 'warning' : 'primary'}">${Orders.shipping}</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
    console.log(tr);
})