const main = document.getElementById("main");
const addUserBtn = document.getElementById("add_user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show_millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate_wealth");




getRandomUser();
getRandomUser();
getRandomUser();
// Show user details on screen....

let data = [];
// console.log(data);
// Fetch random user and add money
async function getRandomUser() {
    const res = await fetch("https://randomuser.me/api")
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser);


}

function addData(obj) {
    data.push(obj);

    displayUser()
}

function displayUser(providedData = data) {
    // const createDiv = document.createElement('div');
    // main.appendChild(createDiv);
    main.innerHTML = `<h2>
    <strong>Person</strong> Wealth
</h2>`
    providedData.forEach(element => {
        const createDiv = document.createElement('div');
        createDiv.classList.add('person');

        createDiv.innerHTML = `
        <strong>${element.name}</strong> ${formatMoney(element.money)}`;
        main.appendChild(createDiv)
    })
}

// Format number as money- 
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67


}


// Double money function...

function doubleMoney() {
    data = data.map(item => {
        return {...item, money: item.money * 2 };
    })
    displayUser();
    console.log(data);


}

// Show only millionaires.....

function showMillionaires() {
    data = data.filter(item => item.money > 1000000);

    displayUser();
}

// Sort users by richest

function sortByRichest() {
    data.sort((a, b) => b.money - a.money);

    displayUser();
}








// getRandomUser();

// function displayUser(OBDURATE) {
//     let createDiv = document.createElement('div');
//     main.appendChild(createDiv);
//     createDiv.innerHTML = `
//     <h2>
//     <strong>${OBDURATE.name}</strong> ${OBDURATE.money}
// </h2>`
//     console.log("this is display user function");
// }

addUserBtn.addEventListener("click", getRandomUser);

doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);


// function addData(obj) {
//     data.push(obj);
// }