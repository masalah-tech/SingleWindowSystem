// Window Load Event
window.addEventListener("load", windowLoadEvent => {

    // updateLang changes the innerHTML of any element
    //      that has a [data-lang] attribute, based on the value of
    //      of the [lang] attribute of the <html> element
    updateLang();

    // putRegionsData puts the countries, governorates and directorates 
    //      in the <select> elements that need them
    putRegionsData();

    // setHtmlOfNewOptions adds an other <option> element to the end of
    //      every <select> element with class "has-new-options"
    setHtmlOfNewOptions();

    // eventsCore is the only function that calls events on
    //      various elements
    eventsCore();

    // putTodayInInput puts the date of today every input element
    //      that has the class 'put-today'
    putTodayInInput();

    //mznValidation();

}); // / Window Load Event

// eventsCore is the only function that calls events on
//      various elements
function eventsCore() {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const aLinks = document.querySelectorAll("a");
    const btns = document.querySelectorAll("button");
    const forms = document.querySelectorAll("form");
    const selects = document.querySelectorAll("select");
    const fileInputs = document.querySelectorAll("input[type=file]");
    const textInputs = document.querySelectorAll("input[type=text]");
    const numuricInputs = document.querySelectorAll("input[type=number]");
    const dateInputs = document.querySelectorAll("input[type=date]");
    const textareaInputs = document.querySelectorAll("textarea");
    const emailInputs = document.querySelectorAll("input[type=email]");
    const datetimeInputs = document.querySelectorAll("input[type=datetime-local]");

    // Window Click Event
    window.addEventListener("click", windowClickEvent => {

        // toggleLangDropdown shows/hides the lang dropdown
        //      based on the position clicked on the window
        toggleLangDropdown(windowClickEvent);

    });
    // / Window Click Event

    checkboxes.forEach(checkbox => {
        // Checkbox Change Event
        checkbox.addEventListener("change", checkboxChangeEvent => {
            if (checkbox.classList.contains("controls-a-box")) {

                // toggleABoxByACheckbox shows/hides a <div> element
                //      based on the state of the checkbox
                toggleABoxByACheckbox(checkbox);
            }
        }); // / Checkbox Change Event
    });

    aLinks.forEach(aLink => {
        // <a> Click Event
        aLink.addEventListener("click", aLinkClickEvent => {

            if (aLink.classList.contains("show-confirm-popup")) {
                aLinkClickEvent.preventDefault();

                // showConfirmationPopup shows a popup used
                //      to confirm a specific procedure
                showConfirmationPopup(aLink);
            }

            if (aLink.classList.contains("close-confirm-popup")) {
                aLinkClickEvent.preventDefault();

                // hideConfirmationPopup hides a popup used
                //      to confirm a specific procedure
                hideConfirmationPopup(aLink)
            }

            if (aLink.hasAttribute("box-target")) {
                aLinkClickEvent.preventDefault();


                // showABoxByALink shows a <div> element and
                //      puts some layout on the clicked button container
                showABoxByALink(aLink);
            }
        });
        // / <a> Click Event
    });

    btns.forEach(btn => {
        // <button> Click Event
        btn.addEventListener("click", btnClickEvent => {
            if (btn.classList.contains("close-confirm-popup")) {

                // hideConfirmationPopup hides a popup used
                //      to confirm a specific procedure
                hideConfirmationPopup(btn)
            }

            if (btn.classList.contains("close-popup")) {
                const tempSenderSelectId = ($(btn).parent().parent()[0]).querySelector(".sender-select-id").value;

                // hideNewOptionPopup hides the new-option popup and resets
                //      the sender <select> element
                hideNewOptionPopup(tempSenderSelectId)
            }

            if (btn.classList.contains("submit-new-option-btn")) {
                const tempSenderSelectId = ($(btn).parent().parent()[0]).querySelector(".sender-select-id").value;

                // submitNewOption submits the new option entered in the popup
                //      to the sender <select> element, and then hides the popup
                submitNewOption(tempSenderSelectId);
            }

            if (btn.classList.contains("add-notification-btn")) {

                // pushANotification adds a new notification
                pushANotification();
            }
        });
        // / <button> Click Event
    })

    forms.forEach(form => {
        // <form> Submit Event
        form.addEventListener("submit", formSubmitEvent => {
            if (form.classList.contains("conf-popup-form")) {
                formSubmitEvent.preventDefault();
                const tempCloseConfPopupBtn = form.querySelector(".close-confirm-popup");

                if (tempCloseConfPopupBtn != null) {

                    // hideConfirmationPopup hides a popup used
                    //      to confirm a specific procedure
                    hideConfirmationPopup(tempCloseConfPopupBtn)
                }

                // showSuccessfullySentPopup shows a SweetAlert popup indicating
                //      that the form has been successfully sent
                showSuccessfullySentPopup(form);
            }

            if (form.classList.contains("mzn-validation"))
            {
                formSubmitEvent.preventDefault();

                // mznValidation is a custom validation function for the form
                mznValidation(form);

                const tempEmptyInputs = form.querySelectorAll(".mzn-validate-empty-input");

                if (tempEmptyInputs.length == 0) {
                    form.submit();
                }
                else {
                    // showMissedFieldsMsg shows a message indicating the user
                    //      has missed some input fields empty
                    showMissedFieldsMsg();
                }
            }
        });
        // / <form> Submit Event
    });

    selects.forEach(select => {
        // <select> change Event
        select.addEventListener("change", selectChangeEvent => {
            if (select.classList.contains("has-new-options")) {
                if (select.value == "addNew") {
                    showNewOptionPopup(select.getAttribute("custom-id"));
                }
            }

            if (select.classList.contains("governorates-select")
                && select.hasAttribute("controls-directorate")) {
                const targetDirectorateId = select.getAttribute("controls-directorate");

                if (select.value != "Select" && select.value != "addNew") {

                    // loadNewDirectorates loads the new directorates when the
                    //      governorate <select> changes
                    loadNewDirectorates(targetDirectorateId, select.value);
                }
                else {

                    // resetDirectorateSelect resets the directorate <select> element
                    //      whose ID is passed through the parameter
                    resetDirectorateSelect(targetDirectorateId);
                }
            }

            if (select.classList.contains("controls-gov-and-direc")) {

                // changeRegions changes the governorates and directorates when the
                //      country is changed
                changeRegions($(select).parent().parent()[0]);
            }

            if (select.classList.contains("condition-select")) {

                // showHideBoxesUponSelect toggles <div> elements upon the 
                //      the <select> value passed through the parameter
                showHideBoxesUponSelect(select);
            }

            if (select.value != "") {

                // removeValidationStyle removes the validation style of the specified element
                removeValidationStyle($(select).parent()[0], select);
            }
        });
        // / <select> change Event
    });

    fileInputs.forEach(fileInput => {
        // File <input> Change Event
        fileInput.addEventListener("change", fileInputChangeEvent => {
            const tempNameTarget = ($(fileInput).parent()[0]).querySelector(".file-name");

            // putFileName puts the uploaded file name in the
            //      innerHTML of a specifed target element
            putFileName(tempNameTarget, fileInput)

            if (fileInput.value != "") {

                // removeValidationStyle removes the validation style of the specified element
                removeValidationStyle($(fileInput).parent().parent().parent()[0], $(fileInput).parent()[0]);
            }

        });
        // / File <input> Change Event
    });

    textInputs.forEach(textInput => {
        // Text <input> Change Event
        textInput.addEventListener("change", textInputChangeEvent => {

            // sharedInputFunctionality implements the shared functionality
            //      that is common between cetain <input> element types
            sharedInputFunctionality(textInput, textInputChangeEvent);
        });
        // / Text <input> Change Event
    });

    numuricInputs.forEach(numuricInput => {
        // Numuric <input> Change Event
        numuricInput.addEventListener("change", numuricInputChangeEvent => {

            // sharedInputFunctionality implements the shared functionality
            //      that is common between cetain <input> element types
            sharedInputFunctionality(numuricInput, numuricInputChangeEvent)
        });
        // / Numuric <input> Change Event
    });

    dateInputs.forEach(dateInput => {
        // Date <input> Change Event
        dateInput.addEventListener("change", dateInputChangeEvent => {

            if (dateInput.value != "") {

                // removeValidationStyle removes the validation style of the specified element
                removeValidationStyle($(dateInput).parent()[0], dateInput);
            }
        });
        // / Date <input> Change Event
    });

    textareaInputs.forEach(textareaInput => {
        // <textarea> Change Event
        textareaInput.addEventListener("change", textareaChangeEvent => {

            if (textareaInput.value != "") {

                // removeValidationStyle removes the validation style of the specified element
                removeValidationStyle($(textareaInput).parent()[0], textareaInput);
            }
        });
        // / <textarea> Change Event
    });

    emailInputs.forEach(emailInput => {
        // Email Input Change Event
        emailInput.addEventListener("change", emailInputChangeEvent => {

            if (emailInput.value != "") {

                // removeValidationStyle removes the validation style of the specified element
                removeValidationStyle($(emailInput).parent()[0], emailInput);
            }
        });
        // / Email Input Change Event
    });

    datetimeInputs.forEach(datetimeInput => {
        // Datetime Input Change Event
        datetimeInput.addEventListener("change", datetimeChangeEvent => {

            if (datetimeInput.value != "") {

                // removeValidationStyle removes the validation style of the specified element
                removeValidationStyle($(datetimeInput).parent()[0], datetimeInput);
            }
        });
        // / Datetime Input Change Event
    });


}

// sharedInputFunctionality implements the shared functionality
//      that is common between cetain <input> element types
function sharedInputFunctionality(inputElem, inputElemEvent) {
    if (inputElem.classList.contains("operand")) {
        const tempCalContainer =
            document.querySelector(inputElem.getAttribute("cal-container"));

        // updateSumTarget updates a calculation result target
        //      upon the values of certain operands
        updateSumTarget(tempCalContainer);
    }

    if (inputElem.classList.contains("sanitize")) {

        // customSanitize sanitizes numeric inputs to make sure they have
        //      correct values
        customSanitize(inputElem);
    }

    if (inputElem.classList.contains("percentage-input")) {
        const tempCalContainer =
            document.querySelector(inputElem.getAttribute("cal-container"));

        // checkPercentageRules ensures that the percentage input has
        //      correct value and then makes sure the total number of
        //      input values adds to 100.00
        checkPercentageRules(inputElem, tempCalContainer);
    }

    if (inputElem.value != "") {

        // removeValidationStyle removes the validation style of the specified element
        removeValidationStyle($(inputElem).parent()[0], inputElem);
    }
}
