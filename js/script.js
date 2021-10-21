// variables
const urlOfImgProduct = document.getElementById("urlOfImgProduct"),
      titleOfProduct = document.getElementById("titleOfProduct"),
      priceOfProduct = document.getElementById("priceOfProduct"),
      descOfProduct = document.getElementById("descOfProduct"),
      addProductBtn = document.querySelector(".addProductBtn"),
      row = document.querySelector(".row");

addProductBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (urlOfImgProduct.value == "" || titleOfProduct.value == "" || priceOfProduct.value == "" || descOfProduct.value == "") {
    alert("Required Fields are empty");
  }
  else {
    let col = document.createElement("div");
    col.classList.add("col");
    col.innerHTML = `
    <div class="imgBox">
      <img src="${urlOfImgProduct.value}" alt="" />
    </div>
    <div class="content">
      <h3 class="title">${titleOfProduct.value}</h3>
      <span class="price">$${priceOfProduct.value}</span>
      <p>${descOfProduct.value}</p>
      <a href="#" class="btn">Buy Now</a>
    </div>
  `;
  row.insertAdjacentElement("beforeend", col);
  urlOfImgProduct.value = "";
  titleOfProduct.value = "";
  priceOfProduct.value = "";
  descOfProduct.value = "";
  }
});



// this have to be added in HTML code when clicking on button
{/* <div class="col">
  <div class="imgBox">
    <img src="https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
  </div>
  <div class="content">
    <h3 class="title">Title</h3>
    <span class="price">$20</span>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores explicabo, quos beatae eaque dolorem nulla?</p>
    <a href="#" class="btn">Buy Now</a>
  </div>
</div> */}