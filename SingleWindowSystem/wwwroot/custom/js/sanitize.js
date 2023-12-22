// customSanitize sanitizes numeric inputs to make sure they have
//      correct values
function customSanitize(inputElem) {

    if (isNaN(parseFloat(inputElem.value))) {
        inputElem.value = 0;
    }

    if ((inputElem.classList.contains("min-0") && parseInt(inputElem.value) <= 0)) {
        inputElem.value = 0;
    }
}

// checkPercentageRules ensures that the percentage input has
//      correct value and then makes sure the total number of
//      input values adds to 100.00
function checkPercentageRules(percentageInput, calContainer) {

    if (isNaN(parseFloat(percentageInput.value)))
        percentageInput.value = parseFloat(0).toFixed(2);

    percentageInput.value = parseFloat(percentageInput.value).toFixed(2);

    if (parseFloat(percentageInput.value).toFixed(2) > 100.00)
        percentageInput.value = parseFloat(100).toFixed(2);
    else if (parseFloat(percentageInput.value).toFixed(2) < 0.00)
        percentageInput.value = parseFloat(0).toFixed(2);

    // checkPercentsTotal makes sure that the total number of
    //      percentage input values adds to 100.00
    checkPercentsTotal(calContainer);
}

// checkPercentsTotal makes sure that the total number of 
//      percentage input values adds to 100.00
function checkPercentsTotal(calContainer) {
    let percentageInputs = [];
    let sum = 0;
    const percentErrTarget = calContainer.querySelector(".percentage-err");

    if (percentErrTarget != null) {
        percentageInputs = calContainer.querySelectorAll(".percentage-input");

        percentageInputs.forEach(percentageInput => {

            sum += parseFloat(percentageInput.value);
        })

        if (parseFloat(sum).toFixed(2) == 100.00)
            percentErrTarget.classList.add("d-none");
        else
            percentErrTarget.classList.remove("d-none");

        sum = 0;
    }
}