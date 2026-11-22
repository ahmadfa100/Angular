const storeName = "ElectroShop"
let description = "ElectroShop sells electronic products.";
const  currency = "JO"
let ProductsLength = 0
let storeAvailableLocation = ""
let isStoreOpen = true;

const descriptionEle = document.getElementById("description")

if (descriptionEle) {
    descriptionEle.textContent = description;
}

let ElectProducts = ["Lamp","Refrigerator","Air condition","Microwave oven ","Vacuum cleaner"]
let ProductsArray: (string | number | boolean)[] = [
    "Lamp", 22, true,
    "Refrigerator", 650, true,
    "Air condition", 450, false,
    "Microwave oven", 120, true,
    "Vacuum cleaner", 180, false
];

const welcome = document.getElementById("welcome")
if(welcome)
if(isStoreOpen){
        welcome.textContent =" Welcome! the store is open. ";
}else{
    
    welcome.textContent = " the store is closed" 
}

let countMoreThan100 =0 ;
let productPrice = document.getElementById("productPrice")
let result = ""

ProductsArray.forEach(element => {

    if(typeof element === "number"){
    if(  element > 500){
        result += "Expensive Product\n"; 
        
        
    }else if (element >=100 && element <500){
        result +="Medium Price\n"; 
        
    }else{
        result +="Affordable Product \n"; 
        
    }
    
    if(element > 100)
        countMoreThan100++;

    }
    
});


let productsNames = document.getElementById("productsNames")
ElectProducts.forEach(element => {
    if(productsNames)
    productsNames.innerHTML +=`<li>${element}</li>`
});

let productPriceEle = document.getElementById("productPrice")
if(productPriceEle)
productPriceEle.textContent=countMoreThan100.toString()

function calculateDiscount(price: number, discountPercentage: number): number {
    let discount = price * discountPercentage ;
    price -= discount;
    return price;
}


console.log(calculateDiscount(30, 5))

function checkProductAvailability(productQuanitity:number){
    return productQuanitity > 0 ? "In Stock" : "Out of stock"
    
}
console.log(checkProductAvailability(20))

function displayProductInfo (productName:string,productPrice:Number,productDescription?:string, productCurrency:number = 30):void{
    console.log(`Product name : ${productName}, Product Price : ${productPrice},
        Product Description : ${productDescription}, Product currency : ${productCurrency},`)
}
displayProductInfo("PC", 200, "Ram : 32" , )

function displayStoreMessage(message: string): void {
    console.log(message);
}

displayStoreMessage("Welcome to ElectroShop!");



let totalPRices = 0
function calculateTotalPrice(...prices:number[]):void{
    prices.forEach(element => {
        
        totalPRices+=element
    });
    console.log("totalPRices : " + totalPRices)
}
calculateTotalPrice(10 ,20 ,30 ,40)


let products = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];

function loadProducts(): void {

    let container = document.getElementById("productsContainer");

    if (container) {

        container.innerHTML = "";

        products.forEach(element => {

            container.innerHTML += `
                <div>
                    <h3>${element.name}</h3>
                    <p>${element.description}</p>
                    <p>Price: ${element.price} ${currency}</p>
                </div>
            `;

        });
    }
}

const loadBtn = document.getElementById("loadBtn");

if (loadBtn) {
    loadBtn.addEventListener("click", loadProducts);
}