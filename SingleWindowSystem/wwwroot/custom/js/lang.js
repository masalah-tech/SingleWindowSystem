// getLangData takes a language code (ar or en), loads the json
//      file of that language and returns an object containing
//      the language data as key/value pairs
async function getLangData(lang) {
    let url = "";

    switch (lang) {
        case "ar":
            url = "/custom/json/ar.json";
            break;

        case "en":
            url = "/custom/json/en.json";
            break;

        default:
            console.log("Error: Invalid lang code... Lang code is being set to \"ar\"");
            url = "/custom/json/ar.json";
            break;
    }

    const response = await fetch(url);

    return response.json();
}

// toAr changes the innerHTML of every element that has a [data-lang]
//      attribute to an Arabic text
async function toAr() {
    const arData = await getLangData("ar");

    document.querySelectorAll("[data-lang]").forEach(dataLang => {
        dataLang.innerHTML = arData[dataLang.getAttribute("data-lang")];
    })
}

// toEn changes the innerHTML of every element that has a [data-lang]
//      attribute to an English text
async function toEn() {
    const enData = await getLangData("en");

    document.querySelectorAll("[data-lang]").forEach(dataLang => {
        dataLang.innerHTML = enData[dataLang.getAttribute("data-lang")];
    })
}

// updateLang changes the innerHTML of any element
//      that has a [data-lang] attribute, based on the value of
//      of the [lang] attribute of the <html> element
function updateLang() {
    if (document.querySelector("html").getAttribute("lang") === "ar")
        toAr();
    else if (document.querySelector("html").getAttribute("lang") === "en")
        toEn();
}

// toggleLangDropdown shows/hides the lang dropdown
//      based on the position clicked on the window
function toggleLangDropdown(event) {
    const langDropdownContent = document.querySelector(".lang-dropdown .dropdown-content")
    const langDropdownBtn = document.querySelector("#lang-drop-btn")

    if (!langDropdownContent.contains(event.target) && langDropdownContent.classList.contains("active"))
        langDropdownContent.classList.remove("active")
    else if (langDropdownBtn.contains(event.target))
        document.querySelector(".lang-dropdown .dropdown-content").classList.add("active");
}