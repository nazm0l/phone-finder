// Load Phones

const allPhone = () => {
  const searchValue = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));

  //   reset search input
  document.getElementById("searchInput").value = "";
};

// display phones

const displayPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  phones.slice(0, 20).forEach((phone) => {
    // console.log(phone);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto p-4" alt="...">
        <div class="card-body">
        <h4 class="card-title">Name: ${phone.phone_name}</h4>
        <h6>Brand: ${phone.brand}</h6>
        <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-success btn-sm">Show details</button>
        </div>
        </div>
    `;
    phoneContainer.appendChild(div);
  });
};

// Getting phone slug

const phoneDetails = (id) => {
  console.log(id);
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhoneDetails(data.data));
};

const displayPhoneDetails = (details) => {
  console.log(details);
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="text-center bg-info text-white p-2">
        <h3>Details Information</h3>
        </div>
        <div class="card h-100">
        <img src="${details.image}" class="card-img-top w-50 mx-auto p-4" alt="...">
        <div class="card-body">
        <h4 class="card-title">Name: ${details.name}</h4>
        <h6>Brand: ${details.brand}</h6>
        <p class="card-text">Release Date: ${details.releaseDate}</p>
        <h6 class="card-text">Main Features:</h6>
            <ul>
                <li>Chipset: ${details.mainFeatures.chipSet}</li>
                <li>Memory: ${details.mainFeatures.memory}</li>
                <li>Storage: ${details.mainFeatures.storage}</li>
                <li>Display: ${details.mainFeatures.displaySize}</li>
            </ul>
        </div>
        </div>
    `;
  detailsContainer.appendChild(div);
};
