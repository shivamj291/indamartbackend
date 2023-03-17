import mainNavbar from  "../components/mainNavbar.js"
import getRewiews from  "../components/reviews.js"
import {fetchData} from "../utils/utils.js"

import {footer} from '../components/footer.js'


document.querySelector("#footer").innerHTML=footer();
document.getElementById('navbar').innerHTML = mainNavbar();
// document.getElementById('review').innerHTML = getRewiews();

document.getElementById('i-searchbtn').addEventListener('click',() => {
    fetch();
})


let fetch = async () => {
     
    let query = document.getElementById('i-searchbar').value;

   
    let url = `http://localhost:8000?q=${query}`

    let data = await fetchData(url);
    console.log((data));
    displayData(data.data);
}

let displayData = (data) => {

      let container = document.getElementById('products');
      container.innerHTML = "";
    data.map( (elem)=> {
        
        // container.innerHTML = "";
        let div = document.createElement('div');
            div.setAttribute("class","product-div")
        
        let Image = document.createElement('img');
            Image.src = elem.image;
            Image.setAttribute("id","prod-image")

        let Name = document.createElement('p');
            Name.textContent = elem.name;
            Name.style.color = "blue"
            Name.style.cursor = "pointer"
            Name.addEventListener('click',()=> {
                 saveStorage("ID", elem.id)
                window.location.href ="product-details.html"
            })
            // Name.href = name;
        let Price = document.createElement('h2');
            Price.textContent = elem.price;

            let Seller_type = document.createElement('p');
            Seller_type.textContent = elem.Seller_type;

        let Seller = document.createElement('p');
            Seller.textContent = elem.seller_name;

        let City = document.createElement('p');
            City.textContent = elem.city;
            City.style.color = "rgb(141,119,119)"

        let mob = document.createElement('h3');
             mob.textContent = ` Call / ${elem.phone_num}`;

        let btn = document.createElement('button');
            btn.textContent = "Contact Supplier"
            btn.setAttribute( "id","prod-btn")
            btn.addEventListener('click',async()=> {
                saveStorage("ID", elem.id)
                window.location.href = "product-details.html"
            })
        div.append(Image,Name,Price,Seller,City,mob,Seller_type,btn);
        container.append(div);
    })
}
// fetch();


document.getElementById('i-searchbar').oninput = () => {
    debounce(fetch,1000); 
}

let timer;
let debounce = (func,delay) => {
    timer ? clearTimeout(timer) : null;

    timer = setTimeout(() => {
        func();
    },delay)
}


let saveStorage = (key,value) => {
 localStorage.setItem(key,JSON.stringify(value));
}





document.getElementById('nearme-btn').addEventListener('click',()=> {

    fetchCity();
})

let fetchCity = async ()=> {

    let url = `http://localhost:8000?city=Pune`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('pune').addEventListener('click',()=> {

    fetchCityPune();
})


let fetchCityPune = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `http://localhost:8000?city=Pune&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}


document.getElementById('indore').addEventListener('click',()=> {

    fetchCityindore();
})


let fetchCityindore = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Indore&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('delhi').addEventListener('click',()=> {

    fetchCitydelhi();
})


let fetchCitydelhi = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Delhi&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('agra').addEventListener('click',()=> {

    fetchCityagra();
})


let fetchCityagra = async ()=> {
    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Agra&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('rajkot').addEventListener('click',()=> {

    fetchCityRajkot();
})


let fetchCityRajkot = async ()=> {
    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Rajkot&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('bathinda').addEventListener('click',()=> {

    fetchCityBathinda();
})


let fetchCityBathinda = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Bathinda&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}


document.getElementById('madurai').addEventListener('click',()=> {

    fetchCityMadurai();
})


let fetchCityMadurai = async ()=> {
    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Madurai&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}


document.getElementById('banglore').addEventListener('click',()=> {

    fetchCityBanglore();
})


let fetchCityBanglore = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Banglore&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}




document.getElementById('chennai').addEventListener('click',()=> {

    fetchCityChennai();
})


let fetchCityChennai = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Chennai&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}



document.getElementById('hyderabad').addEventListener('click',()=> {

    fetchCityHyderabad();
})


let fetchCityHyderabad = async ()=> {

    let query = document.getElementById('i-searchbar').value;

    let url = `http://localhost:8000?city=Hyderabad&q=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("manufacturer").addEventListener('click',()=> {
    console.log("jhjhkj")
   fetchManufacturer();
})


let fetchManufacturer = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `http://localhost:8000?Seller_type=Manufacturer&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("wholeSeller").addEventListener('click',()=> {
    console.log("jhjhkj")
   fetchWholeSeller();
})


                        // <p id="exporter">Exporter</p>
                        // <p id="retailer">Retailer</p>

let fetchWholeSeller = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `http://localhost:8000?Seller_type=Wholeseller&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("exporter").addEventListener('click',()=> {
    console.log("jhjhkj")
   fetchExporter();
})


let fetchExporter = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `http://localhost:8000?Seller_type=Exporter&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}

document.getElementById("retailer").addEventListener('click',()=> {
    console.log("jhjhkj")
   fetchRetailer();
})


let fetchRetailer = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `http://localhost:8000?Seller_type=Retailer&category=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}
document.getElementById("black_rice").addEventListener('click',()=> {
   
   fetchBlack_rice();
})


let fetchBlack_rice = async ()=> {

    let query = document.getElementById('i-searchbar').value;
     
    let url = `http://localhost:8000?Color=Black&cat=${query}`

    let data = await fetchData(url);
    console.log(data);
    displayData(data.data);
}
document.getElementById("golden_rice").addEventListener('click',()=> {
   
    fetchGolden_rice();
 })
 
 
 let fetchGolden_rice = async ()=> {
 
     let query = document.getElementById('i-searchbar').value;
      
     let url = `http://localhost:8000?Color=Golden&cat=${query}`
 
     let data = await fetchData(url);
     console.log(data);
     displayData(data.data);
 }
 document.getElementById("brown_rice").addEventListener('click',()=> {
   
    fetchBrown_rice();
 })
 
 
 let fetchBrown_rice = async ()=> {
 
     let query = document.getElementById('i-searchbar').value;
      
     let url = `http://localhost:8000?Color=Brown&cat=${query}`
 
     let data = await fetchData(url);
     console.log(data);
     displayData(data.data);
 }
 document.getElementById("white_rice").addEventListener('click',()=> {
   
    fetchWhite_rice();
 })
 
 
 let fetchWhite_rice = async ()=> {
 
     let query = document.getElementById('i-searchbar').value;
      
     let url = `http://localhost:8000?Color=White&cat=${query}`
 
     let data = await fetchData(url);
     console.log(data);
     displayData(data.data);
 }

document.getElementById('body').onload('click',()=> {

    fetchDataRandom();
})


let fetchDataRandom = async ()=> {

    let url = `http://localhost:8000/`

    let data = await fetchData(url);
  //  console.log(data);
   // displayData(data.data);
}



// filter by seller type








