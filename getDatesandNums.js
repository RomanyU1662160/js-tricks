let datebtn = global.querySelector("#get-date");
let dateSpan = global.querySelector("#date-span");

console.log(dateSpan);

datebtn.addEventListener("click", () => {
    let dateInput = global.querySelector("#date").valueAsDate;
    console.log(typeof dateInput);
    console.log(dateInput);
    dateSpan.textContent = `day-> ${dateInput.getDate()} : month ->${dateInput.getMonth() + 1} : Year ->${dateInput.getYear()}    timezone->   ${dateInput.getTimezoneOffset()}`;
})
