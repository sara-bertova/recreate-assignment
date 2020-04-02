fetch("http://rasbery.eu/cms/wp-json/wp/v2/posts")
.then(function (response){
      return response.json()
      })
.then(function (data){
    showData(data)
})

function showData(jsonData){
    console.log(jsonData)
    jsonData.forEach(showPost)
}


function showPost(post) {
    const template = document.querySelector("#Posts").content;
    const clone = template.cloneNode(true);
    clone.querySelector("h1").textContent = post.title.rendered;
    clone.querySelector(".date").textContent = post.date;
    clone.querySelector(".slug span").textContent = post.slug;
    clone.querySelector(".status span").textContent = post.status;
    clone.querySelector(".type span").textContent = post.type;
    clone.querySelector("a").href = post.link;
    clone.querySelector("a").textContent = post.link;
    clone.querySelector(".excerpt").innerHTML = post.excerpt.rendered;
    document.querySelector("#ex").appendChild(clone);
}
