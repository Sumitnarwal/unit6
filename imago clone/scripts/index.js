const api = "https://api.unsplash.com/photos/?per_page=28&client_id=RAwyi7P5k2ysyEe3ZgMXrMmb45zWztvwL9_fbEvLHso"
//const api = "https://picsum.photos/v2/list?page=1&limit=10";

//const api="http://www.omdbapi.com/?apikey=dfe7259c"
async function allProduct() {
    try {
        let res = await fetch(api);
        let data = await res.json();
        console.log(data)
      appendData(data)
    } catch (error) {
        console.log("error", error);
    }
}
allProduct()

function appendData(data) {
    const cart=[]
    let main = document.getElementById("data_display")
   
    data.forEach((el) => {

        let div = document.createElement("div");
        div.setAttribute("id", "divConImg")
       
        let pp = document.createElement("p");
        pp.innerHTML = el.user.name
        let img = document.createElement("img")
        img.setAttribute("id", "imgk")
        img.src = el.urls.small
        img.addEventListener("click", function () {
            cart.push(el)
            localStorage.setItem("clicked_item",JSON.stringify(cart));
            
            window.location.href = "./detailPage.html"
        })
        div.append(img, pp);
        // console.log(el.url)
        main.append(div)

    }
    )
}
