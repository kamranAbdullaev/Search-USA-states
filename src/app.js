import './style.css';;
import { db_1 } from './DB1.js';
import { db_2 } from './DB2.js';
import { db_3 } from './DB3.js';
const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options"),
  allUl = wrapper.querySelectorAll('#allUl');


let allCountry = [];
Array.prototype.push.apply(allCountry, db_1);
allCountry.push.apply(db_2);
allCountry.push.apply(db_3);


const countries = allCountry;
function addCountry(selectedCountry) {
  options.innerHTML = "";
  countries.forEach(country => {
    let isSelected = country == selectedCountry ? "selected" : "";
    let li = `<li  class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}


function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = countries.filter(data => {
    return data.toLowerCase().startsWith(searchWord);
  }).map(data => {
    let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
    return `<li class="${isSelected}">${data}</li>`;
  }).join("");
  options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! Country not found</p>`;
});

selectBtn.addEventListener("click", (e) => {
  wrapper.classList.toggle("active");
  console.log(e.target);

});

allUl.forEach(data => {
  data.addEventListener('click', (e) => {
    console.log(e.target);
    updateName(e.target);

  });
});







