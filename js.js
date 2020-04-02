fetch("http://rasbery.eu/cms/wp-json/wp/v2/bike")
.then(function (response){
      return response.json()
      })
.then(function (data){
    showData(data)
})

function showData(jsonData){
    console.log(jsonData)
    jsonData.forEach(showBike)
}


function showBike(bike) {
    const template = document.querySelector("#Bikes").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = bike.title.rendered;
    clone.querySelector("h3").textContent = bike.brand;
    clone.querySelector(".price span").textContent = "$" + `${bike.price}`;
    clone.querySelector(".colours span").textContent = bike.colours;
    clone.querySelector(".status span").textContent = bike.stock;
    clone.querySelector("img").src=bike.images.guid;
    document.querySelector("#bikestock").appendChild(clone);
}
