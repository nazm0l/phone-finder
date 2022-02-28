const allPhone = () => {
  const searchValue = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto p-4" alt="...">
        <div class="card-body">
        <h4 class="card-title">Name: ${phone.phone_name}</h4>
        <h6>Brand: ${phone.brand}</h6>
        <p class="card-text"></p>
        <button type="button" class="btn btn-success">Show details</button>
        </div>
        </div>
    `;
    phoneContainer.appendChild(div);
  });
};
