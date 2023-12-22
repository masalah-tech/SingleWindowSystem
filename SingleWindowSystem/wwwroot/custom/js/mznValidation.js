// mznValidation is a custom validation function for the form
function mznValidation(form) {
    const inputContainers = form.querySelectorAll(".mzn-input-container");
    const lang = document.querySelector("html").getAttribute("lang");
    let textInput = {};
    let numberInput = {};
    let selectInput = {};
    let fileInput = {};
    let dateInput = {};
    let textareaInput = {};
    let emailInput = {};
    let datetimeInput = {};
    let inputBorderElement = {};

    inputContainers.forEach(inputContainer => {
        textInput = inputContainer.querySelector("input[type=text][required]:not([readonly])");
        numberInput = inputContainer.querySelector("input[type=number][required]:not([readonly])");
        selectInput = inputContainer.querySelector("select[required]:not([readonly])");
        fileInput = inputContainer.querySelector("input[type=file][required]:not([readonly])");
        dateInput = inputContainer.querySelector("input[type=date][required]:not([readonly])");
        textareaInput = inputContainer.querySelector("textarea[required]:not([readonly])");
        emailInput = inputContainer.querySelector("input[type=email][required]:not([readonly])");
        datetimeInput = inputContainer.querySelector("input[type=datetime-local][required]:not([readonly])");

        if (textInput != null) {
            mznEmptyValidation(inputContainer, textInput, textInput, lang);
        }

        if (numberInput != null) {
            mznEmptyValidation(inputContainer, numberInput, numberInput, lang);
        }

        if (selectInput != null) {
            mznEmptyValidation(inputContainer, selectInput, selectInput, lang);
        }

        if (fileInput != null) {
            inputBorderElement = inputContainer.querySelector(".file-upload");

            if (inputBorderElement != null) {
                mznEmptyValidation(inputContainer, fileInput, inputBorderElement, lang);
            }
            else {
                console.log("Cannot find the element with class 'file-upload'");
            }
        }

        if (dateInput != null) {
            mznEmptyValidation(inputContainer, dateInput, dateInput, lang);
        }

        if (textareaInput != null) {
            mznEmptyValidation(inputContainer, textareaInput, textareaInput, lang);
        }

        if (emailInput != null) {
            mznEmptyValidation(inputContainer, emailInput, emailInput, lang);
        }

        if (datetimeInput != null) {
            mznEmptyValidation(inputContainer, datetimeInput, datetimeInput, lang);
        }
    });
}

// mznEmptyValidation implements the validation for empty input fields
function mznEmptyValidation(inputContainer, inputElement, inputBorderElement, lang) {
    const validationErrorTarget = inputContainer.querySelector(".mzn-validate-err");

    if (inputElement.value == "" || inputElement.value == "Select") {
        inputBorderElement.classList.remove("mzn-validate-success-input");
        inputBorderElement.classList.add("mzn-validate-empty-input");

        if (validationErrorTarget != null)
        {
            validationErrorTarget.classList.remove("d-none");
        }
    }
    else {
        inputBorderElement.classList.remove("mzn-validate-empty-input");
        inputBorderElement.classList.add("mzn-validate-success-input");
    }
}

// removeValidationStyle removes the validation style of the specified element
function removeValidationStyle(inputContainer, inputBorderElem) {
    const validationErrorTarget = inputContainer.querySelector(".mzn-validate-err");

    if (validationErrorTarget != null) {
        validationErrorTarget.classList.add("d-none");
    }

    inputBorderElem.classList.remove("mzn-validate-empty-input");
    inputBorderElem.classList.remove("mzn-validate-success-input");
}

// removeValidationStyleFromRow removes the validation style from
//      the row being created by the form repeater
function removeValidationStyleFromRow(row) {
    const inputContainers = row.querySelectorAll(".mzn-input-container");
    let textInput = {};
    let numberInput = {};
    let selectInput = {};
    let fileInput = {};
    let dateInput = {};
    let textareaInput = {};
    let emailInput = {};
    let datetimeInput = {};
    let inputBorderElement = {};
    inputContainers.forEach(inputContainer => {
        textInput = inputContainer.querySelector("input[type=text][required]:not([readonly])");
        numberInput = inputContainer.querySelector("input[type=number][required]:not([readonly])");
        selectInput = inputContainer.querySelector("select[required]:not([readonly])");
        fileInput = inputContainer.querySelector("input[type=file][required]:not([readonly])");
        dateInput = inputContainer.querySelector("input[type=date][required]:not([readonly])");
        textareaInput = inputContainer.querySelector("textarea[required]:not([readonly])");
        emailInput = inputContainer.querySelector("input[type=email][required]:not([readonly])");
        datetimeInput = inputContainer.querySelector("input[type=datetime-local][required]:not([readonly])");

        if (textInput != null) {
            removeValidationStyle(inputContainer, textInput)
        }

        if (numberInput != null) {
            removeValidationStyle(inputContainer, numberInput)
        }

        if (selectInput != null) {
            removeValidationStyle(inputContainer, selectInput)
        }

        if (fileInput != null) {
            inputBorderElement = inputContainer.querySelector(".file-upload");

            if (inputBorderElement != null) {
                removeValidationStyle(inputContainer, inputBorderElement)
            }
            else {
                console.log("Cannot find the element with class 'file-upload'");
            }
        }

        if (dateInput != null) {
            removeValidationStyle(inputContainer, dateInput)
        }

        if (textareaInput != null) {
            removeValidationStyle(inputContainer, textareaInput)
        }

        if (emailInput != null) {
            removeValidationStyle(inputContainer, emailInput)
        }

        if (datetimeInput != null) {
            removeValidationStyle(inputContainer, datetimeInput);
        }
    });
}

// showMissedFieldsMsg shows a message indicating the user
//      has missed some input fields empty
function showMissedFieldsMsg() {
    const tempMissedFieldsMessage = document.querySelector(".missed-fields-msg");

    if (tempMissedFieldsMessage != null) {
        if (!tempMissedFieldsMessage.classList.contains("active")) {
            tempMissedFieldsMessage.classList.add("active");

            setTimeout(() => {
                tempMissedFieldsMessage.classList.remove("active");
            }, 6000)
        }
    }
}