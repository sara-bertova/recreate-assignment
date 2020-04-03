fetch("http://rasbery.eu/cms/wp-json/wp/v2/bike")
.then(function (response){
      return response.json()
      })
.then(function (data){
    showData(data)
})

function showData(jsonData){
    jsonData.forEach(showBike)

}


function showBike(bike) {
    const template = document.querySelector("#Bikes").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = bike.title.rendered;
    clone.querySelector("h3").textContent = bike.brand;
    clone.querySelector(".price span").textContent = `${bike.price}`;
    clone.querySelector(".colours span").textContent = bike.colours;

    const colArray = bike.colours.split(",");
    console.log(colArray)
    colArray.forEach(color=>{
        const col = document.createElement("div");
        col.style.background = color;
        clone.querySelector(".colors").appendChild(col);

    })

    if (bike.colours === "N/A"){
        clone.querySelector(".colours").style.display = "block";
        clone.querySelector(".colors").style.display = "none";
    }

    clone.querySelector(".status span").textContent = bike.stock;
    clone.querySelector("img").src=bike.images.guid;
    document.querySelector("#bikestock").appendChild(clone);
}
