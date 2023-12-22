// setHtmlOfNewOptions adds an other <option> element to the end of
//      every <select> element with class "has-new-options"
function setHtmlOfNewOptions(selectObj) {
    if (selectObj == null) {
        document.querySelectorAll(".has-new-options").forEach(select => {
            select.querySelectorAll("option").forEach(option => {
                if (option.value == "addNew")
                    option.remove();
            })
            select.innerHTML += `<option value="addNew" data-lang="Others (Must be Specified)"></option>`;
        })
    }
    else {
        selectObj.querySelectorAll("option").forEach(option => {
            if (option.value == "addNew")
                option.remove();
        })
        selectObj.innerHTML += `<option value="addNew" data-lang="Others (Must be Specified)"></option>`;
    }

    updateLang();
}

// submitNewOption submits the new option entered in the popup
//      to the sender <select> element, and then hides the popup
function submitNewOption(recieverSelectId) {
    const newOptionPopup = document.querySelector("#new-option-popup");
    const newOptionInputElem = document.querySelector("#new-option-popup .custom-pop-new-entry");
    const newValue = newOptionInputElem.value;
    const EmptyErrMessageElem = document.querySelector("#new-option-popup .err-empty");
    const revieverSelect = document.querySelector(`[custom-id=${recieverSelectId}]`);
    const revieverSelectOptions = revieverSelect.querySelectorAll ("option");
    let newOptionHtml = "";

    if (newValue == "") {
        EmptyErrMessageElem.classList.remove("d-none");
        newOptionInputElem.focus();
    }
    else {
        revieverSelectOptions.forEach(option => {
            option.removeAttribute("selected");
        })

        newOptionHtml = `<option value="${newValue}" selected>${newValue}</option>`;

        revieverSelect.innerHTML += newOptionHtml;

        newOptionInputElem.value = "";
        EmptyErrMessageElem.classList.add("d-none");
        newOptionPopup.classList.remove("active");

        setHtmlOfNewOptions(revieverSelect);
    }
}
