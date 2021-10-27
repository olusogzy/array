
let gallery = [
    {
        name: "Mercedes-Benz",
        image: "gwagon",
        year: "2020",
        model: "G 550 4MATIC SUV",
        price: "$100,000",

    },
    {
        name: "Mercedes-Benz",
        image: "benz",
        year: "2020",
        model: "AMG G 63 4MATIC SUV",
        price: "$90,000",
    },
    {
        name: "BMW",
        image: "bmwsuv",
        year: "2020",
        model: "BMW X5 MSRP",
        price: "$95,000",
    }, 
    {
        name: "BMW",
        image: "bmw",
        year: "2020",
        model: "BMW X4 MSRP",
        price: "$105,000",
    },
    {
        name: "Toyota",
        image: "toyotaa",
        year: "2020",
        model: "Land Cruiser 150 Prado series",
        price: "$100,000",
    },
    {
        name: "Toyota",
        image: "toyota",
        year: "2020",
        model: "Land Cruiser 120 Prado series",
        price: "$80,000",
    }
]

console.log('cars', gallery.length)
let carSection = document.getElementById('car-section');
let html = "";
gallery.forEach(e => {
    html += `
            <div class="car-card col-12 col-md-6 col-lg-6 pvx-3" >
              <div class="car-image mb-1">
                <img src="images/${e.image}.jpg" alt="" >
              </div>
              <div class="car-info">
                <h1>${e.name}</h1>
                <h3>${e.model}</h3>
                <h2>${e.price}</h2>
              </div>
            </div>`
            

    console.log(e)
    carSection.innerHTML = html
})