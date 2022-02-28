const allPhone = () => {
  const searchValue = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhone(data.data));
};

const displayPhone = (phones) => {
  phones.forEach((phone) => {
    console.log(phone.phone_name);
  });
};
