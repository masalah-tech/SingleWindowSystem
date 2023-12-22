// putRegionsData puts the countries, governorates and directorates 
//      in the <select> elements that need them
async function putRegionsData() {
    const countriesData = await getCountriesData();
    const yemenData = await getYemenData();

    fillCountries(countriesData);
    fillGovernorate(yemenData);
    fillDirectorates(yemenData);
}

// getCountriesData loads the json file that contains the world coutries
//      data and returns a response object holding that data
async function getCountriesData() {
    let url = "/custom/json/worldCountriesInEnAndAr.json";

    const response = await fetch(url);

    return response.json();
}

// getYemenData loads the json file that contains the governorates
//      and directorates of Yemen, then returns a response object
//      holding that data
async function getYemenData() {
    let url = "/custom/json/yemenData.json";

    const response = await fetch(url);

    return response.json();
}

// fillCountries puts the world countries in the <select> element that
//      has the class "countries-select" and sets Yemen as the selected
//      option by default
function fillCountries(countriesData) {
    let countryName = "";
    const lang = document.querySelector("html").getAttribute("lang");

    document.querySelectorAll(".countries-select").forEach(select => {
        select.innerHTML = ``;

        for (let i in countriesData) {
            countryName = lang === "en" ? countriesData[i].en_name : countriesData[i].ar_name;

            if (countriesData[i].code === "YE")
                select.innerHTML += `<option value="${countryName}" selected>${countryName}</option>`;
            else
                select.innerHTML += `<option value="${countryName}">${countryName}</option>`;
        }
    });
}

// fillGovernorate puts Yemen governorates in the <select> element that
//      has the class "governorates-select"
function fillGovernorate(yemenData) {
    document.querySelectorAll(".governorates-select").forEach(select => {
        for (let i = 0; i < yemenData.states.length; i++)
            select.innerHTML += `<option value="${yemenData.states[i].name}">${yemenData.states[i].name}</option>`;

        setHtmlOfNewOptions(select);
    });
}


// fillGovernorate puts Yemen directorates of the governorate "Sanaa"
//      in the <select> element that has the class "directorates-select"
function fillDirectorates(yemenData) {
    document.querySelectorAll(".directorates-select").forEach(select => {
        for (let i = 0; i < yemenData.states.length; i++) {
            if (yemenData.states[i].name === "Sana'a Governorate") {
                for (let j = 0; j < yemenData.states[i].cities.length; j++) {
                    select.innerHTML += `<option value="${yemenData.states[i].cities[j].name}">${yemenData.states[i].cities[j].name}</option>`;
                }
            }
        }

        setHtmlOfNewOptions(select);
    });
}

// loadNewDirectorates loads the new directorates when the
//      governorate <select> changes
async function loadNewDirectorates(targetSelectId, gevernorateName) {
    const targetSelect = document.querySelector(targetSelectId);
    const yemenData = await getYemenData();

    targetSelect.innerHTML = `<option value="Select" data-lang="--- Select the directorate ---" selected></option>`;

    for (let i = 0; i < yemenData.states.length; i++) {
        if (yemenData.states[i].name === gevernorateName) {
            for (let j = 0; j < yemenData.states[i].cities.length; j++) {
                targetSelect.innerHTML += `<option value="${yemenData.states[i].cities[j].name}">${yemenData.states[i].cities[j].name}</option>`;
            }
        }
    }

    setHtmlOfNewOptions(targetSelect);
}

// resetDirectorateSelect resets the directorate <select> element
//      whose ID is passed through the parameter
function resetDirectorateSelect(targetDirectorateId) {
    const targetSelect = document.querySelector(targetDirectorateId);

    targetSelect.innerHTML = `<option value="Select" data-lang="--- Select the directorate ---" selected></option>`;
    setHtmlOfNewOptions(targetSelect);
}

// changeRegions changes the governorates and directorates when the
//      country is changed
async function changeRegions(regionsContainer) {
    const countriesSelect = regionsContainer.querySelector(".countries-select");
    const governoratesSelect = regionsContainer.querySelector(".governorates-select");
    const directoratesSelect = regionsContainer.querySelector(".directorates-select");
    const yemenData = await getYemenData();

    if (countriesSelect.value == "Yemen" || countriesSelect.value == "اليمن") {
        loadYemenGovernorate(governoratesSelect, yemenData);
        loadSanaaDirectorates(directoratesSelect, yemenData);
    }
    else {
        governoratesSelect.innerHTML = `<option value="Select" data-lang="--- Select the governorate ---" selected></option>`;
        setHtmlOfNewOptions(governoratesSelect);

        directoratesSelect.innerHTML = `<option value="Select" data-lang="--- Select the directorate ---" selected></option>`;
        setHtmlOfNewOptions(directoratesSelect);
    }
}

function loadYemenGovernorate(targetSelect, yemenData) {
    for (let i = 0; i < yemenData.states.length; i++)
        targetSelect.innerHTML += `<option value="${yemenData.states[i].name}">${yemenData.states[i].name}</option>`;

    setHtmlOfNewOptions(targetSelect);
}

function loadSanaaDirectorates(targetSelect, yemenData) {
    for (let i = 0; i < yemenData.states.length; i++) {
        if (yemenData.states[i].name === "Sana'a Governorate") {
            for (let j = 0; j < yemenData.states[i].cities.length; j++) {
                targetSelect.innerHTML += `<option value="${yemenData.states[i].cities[j].name}">${yemenData.states[i].cities[j].name}</option>`;
            }
        }
    }

    setHtmlOfNewOptions(targetSelect);
}