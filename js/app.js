// Load Phones

const allPhone = () => {
  // reset search found
  document.getElementById("search-found").textContent = "";
  document.getElementById("details-container").textContent = "";

  // getting search input value
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
  // No result validation
  if (status == false) {
    document.getElementById("no-result").style.display = "block";
  }

  // Total search found
  const searchFound = document.getElementById("search-found");
  const div = document.createElement("div");
  div.innerHTML = `<h4 class="text-success">Total Item Found: ${phones.length}</h4>`;
  searchFound.appendChild(div);

  // Card container
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  phones.slice(0, 20).forEach((phone) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div class="card h-100">
        <img src="${phone.image}" class="card-img-top w-50 mx-auto p-4" alt="...">
        <div class="card-body text-center">
        <h4 class="card-title">Name: ${phone.phone_name}</h4>
        <h6>Brand: ${phone.brand}</h6>
        <button onclick="phoneDetails('${phone.slug}')" type="button" class="btn btn-success btn-sm">Show details</button>
        </div>
        </div>
    `;
    phoneContainer.appendChild(div);
    document.getElementById("no-result").style.display = "none";
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
        <img src="${
          details.image
        }" class="card-img-top w-50 mx-auto p-4" alt="...">
        <div class="card-body">
        <h4 class="card-title"><span class="fw-bold">Name:</span> ${
          details.name
        }</h4>
        <h6><span class="fw-bold">Brand:</span> ${details.brand}</h6>
        <p class="card-text"><span class="fw-bold">Release Date:</span> ${
          details?.releaseDate ? details?.releaseDate : "Not Found"
        }</p>
        <p class="card-text fw-bold">Main Features:</p>
            <ul>
                <li><span class="fw-bold">Chipset:</span> ${
                  details.mainFeatures.chipSet
                    ? details.mainFeatures.chipSet
                    : "Not Found"
                }</li>
                <li><span class="fw-bold">Memory:</span> ${
                  details.mainFeatures.memory
                }</li>
                <li><span class="fw-bold">Storage:</span> ${
                  details.mainFeatures.storage
                }</li>
                <li><span class="fw-bold">Display:</span> ${
                  details.mainFeatures.displaySize
                }</li>
                <li><span class="fw-bold">Sensors:</span> ${
                  details.mainFeatures.sensors
                }</li>
            </ul>
        <p class="card-text fw-bold">Others:</p>
            <ul>
                <li><span class="fw-bold">Bluetooth:</span> ${
                  details?.others?.Bluetooth
                    ? details?.others?.Bluetooth
                    : "Not Found"
                }</li>
                <li><span class="fw-bold">GPS:</span> ${
                  details?.others?.GPS ? details?.others?.GPS : "Not Found"
                }</li>
                <li><span class="fw-bold">NFC:</span> ${
                  details?.others?.NFC ? details?.others?.NFC : "Not Found"
                }</li>
                <li><span class="fw-bold">Radio:</span> ${
                  details?.others?.Radio ? details?.others?.Radio : "Not Found"
                }</li>
                <li><span class="fw-bold">USB:</span> ${
                  details?.others?.USB ? details?.others?.USB : "Not Found"
                }</li>
                <li><span class="fw-bold">WLAN:</span> ${
                  details?.others?.WLAN ? details?.others?.WLAN : "Not Found"
                }</li>
            </ul>
        </div>
        </div>
    `;
  detailsContainer.appendChild(div);
};
