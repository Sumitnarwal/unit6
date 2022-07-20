let time
function debounce(fun, delay) {
    if (time) {
        clearTimeout(time)
    }
    time = setTimeout(() => {
        fun()
    }, delay)
}

async function debounceFun() {
    const data = await Search()
    append(data)
}

function append(data){
    document.getElementById("SearchContext").textContent=""
    data.map((e)=>{
        let p=document.createElement("p")
        p.textContent=e.alt_description
        document.getElementById("SearchContext").append(p)
    })
}

async function Search() {
    try {
        const searchText = document.getElementById("searchText").value

        const data = await fetch(`https://api.unsplash.com/search/photos?per_page=28&query=${searchText}&client_id=8lBaqc-XJTCXhnwvlftCl7DNmzD3HU9CsGnMNyaHxMo`)
        const res=await data.json();
        return res.results
    }catch(error){
        console.log(error)
    }
}