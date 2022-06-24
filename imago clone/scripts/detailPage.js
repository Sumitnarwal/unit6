



getItem()
function getItem() {

    let main = document.getElementById("main")
    let cart = JSON.parse(localStorage.getItem("clicked_item"))
    console.log("cart", cart)
  cart.map((el) => {
    let div = document.createElement("div");
    div.setAttribute("id", "divConImg")

    let pp = document.createElement("p");
    pp.innerHTML = el.user.name
    let p2 = document.createElement("p");
    p2.innerHTML = el.description

    let img = document.createElement("img")
    img.setAttribute("id", "imgk")
    img.src = el.urls.small

    div.append(img, p2,pp);

    main.append(div)
}
)
}