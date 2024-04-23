const API__URL = "https://dummyjson.com/users"
async function fetchData(url) {
    const data = await fetch(url, {
        method: "GET"
    })
    data
        .json()
        .then(res => createCard(res))
        .catch(err => console.log(err))
}

fetchData(API__URL)

let overall = document.querySelector(".overall__cards")

function createCard(figures){
    let card = ""
    figures.users.forEach(element => {
        card += `
        <div class="card">
            <div class="card__img">
                <img src="${element.image}" alt="">
            </div>
            <div class="card__info">
                <p class="card__text card__name">${element.firstName}</p>
                <p class="card__text card__latName">${element.lastName}</p>
                <p class="card__text card_age">${element.lastName}</p>
                <p class="card__text card__phone">${element.phone}</p>
                <p class="card__text card__university">${element.university}</p>
                <p class="card__text card__email">${element.email}</p>
                <p class="card__text card__gender">${element.gender}</p>
                <p class="card__text card__cardNumber">${element.bank.cardNumber}</p>
                <p class="card__text card__height">${element.height}</p>
                <p class="card__text card__weight">${element.weight}</p>
                <p class="card__text card__bloodGroup">${element.bloodGroup}</p>
                <p class="card__text card__company">${element.company.name}</p>
                <p class="card__text card__address">${element.address.address}</p>
            </div>
        </div>
        `
    });
    overall.innerHTML = card
}