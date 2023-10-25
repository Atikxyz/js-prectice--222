const product = [
  {
    id: 1,
    productName: "Infinix Smart mobile 7 (3/64GB)",
    imageUrl: "https://static-01.daraz.com.bd/p/8f5341e8106e7070aaaec56be0a2647e.jpg_750x750.jpg_.webp",
    price: 200,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad a ullam eius labore repudiandae in maiores ratione odit quis voluptatem blanditiis voluptates ea ex atque quae, est illo suscipit!"
  },
  {
    id: 2,
    productName: "Long sleeve Casual shirt for men - Shirt For Men - Shirt",
    imageUrl: "https://static-01.daraz.com.bd/p/929a0ae6761f74411dfa6b897ffa426c.jpg_750x750.jpg_.webp",
    price: 450,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad a ullam eius labore repudiandae in maiores ratione odit quis voluptatem blanditiis voluptates ea ex atque quae, est illo suscipit!"
  },
  {
    id: 3,
    productName: "Long sleeve Casual shirt for men - Shirt",
    imageUrl: "https://static-01.daraz.com.bd/p/bcc05d1bd58507097a745fb63d142ba4.jpg_750x750.jpg_.webp",
    price: 300,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad a ullam eius labore repudiandae in maiores ratione odit quis voluptatem blanditiis voluptates ea ex atque quae, est illo suscipit!"
  },
  {
    id: 4,
    productName: "Vega V7 Tiger Feature Button Mobile Phone 1000mAh Battery",
    imageUrl: "https://static-01.daraz.com.bd/p/c1f616a48bd07ef9a78f53315491e082.jpg_750x750.jpg_.webp",
    price: 950,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad a ullam eius labore repudiandae in maiores ratione odit quis voluptatem blanditiis voluptates ea ex atque quae, est illo suscipit!"
  },
  {
    id: 5,
    productName: "print Cotton Exclusive Long Sleeve Panjabi for Man",
    imageUrl: "https://static-01.daraz.com.bd/p/41716992fd37e8f0fc64bdb5dadacb21.jpg_750x750.jpg_.webp",
    price: 990,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad a ullam eius labore repudiandae in maiores ratione odit quis voluptatem blanditiis voluptates ea ex atque quae, est illo suscipit!"
  }
];

const form = document.querySelector("#form");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchBoxValue = e.target.searchBox.value;
  const searchValue = searchBoxValue.toLowerCase();
    

  const searchProduct = product.filter((value) => {
    const productTitle = value.productName;
    const title = productTitle.toLocaleLowerCase();

    return title.includes(searchValue);
  });
  const root = document.querySelector(".root");
  let htmlCode = "";
  searchProduct.forEach((value) => {
    const result = productCard(value);
   
   return htmlCode += result;
  })
  root.innerHTML = htmlCode;
});



const productCard = (info) => {

  const {productName,imageUrl,price,description } = info;
  const htmlCode = `
       <div class="product">
        <img src="${imageUrl}" alt="">
        <h2>${price}</h2>

        <h1>${productName}</h1>

        <p>${description}</p>

        <a href="#"><button>Details</button></a>
        </div>
  `
  return htmlCode;
}