// Form Repeater
// ! Using jQuery each loop to add dynamic id and class for inputs. You may need to improve it based on form fields.
// -----------------------------------------------------------------------------------------------------------------

// Custom Form Repeater


$(document).ready(function () {
    $(".add-row-btn").click(function () {
        var $rep = $(this).closest(".form-repeater");
        var $new = $rep.find(".repeater-item").first().clone();
        var $itemsContainer = $rep.find(".items-container");

        $new.find("input, file").val('');
        $new.find("select").val("Select");
        $new.find(".file-name").text('');


        $new[0].querySelector(".delete-btn-container").classList.remove("d-none");


        $new[0].querySelectorAll(".operand").forEach(operand => {
            operand.value = "0";
        })

        $new[0].querySelectorAll(".min-0").forEach(operand => {
            operand.value = "0";
        })

        $itemsContainer.append($new);
        sortFormsetIds();

        controlNewSelectOptions();
        repeaterAddBtnPostActions($new[0]);
    });

    // Remove item
    $(".form-repeater").on("click", ".remove-row-btn", function() {
        var item = $(this).parents(".form-repeater").find(".repeater-item");
        if (item.length > 1) {
            $(this).closest(".repeater-item").remove();
            sortFormsetIds();
        }
        repeaterRemoveBtnPostActions();
    });

    // Handle file input change
    $("#form-repeater").on("change", "file-input", function () {
        var file = this.files[0];
        var $input = $(this);
        var $fileName = $input.closest(".repeater-item").find(".file-name");
        file.text(file.name);
    })
})

repeaterAddBtnPostActions = (newRow) => {
    controlFormExtensions();

    document.querySelectorAll(".operand").forEach(operand => {
        operand.onchange = () => {
            if (isNaN(parseFloat(operand.value)) || parseFloat(operand.value) < 0)
                operand.value = 0;

            calculateTotals();
        };
    });

    const newPercentageInputs = newRow.querySelectorAll(".percentage-input");

    newPercentageInputs.forEach(newPercentageInput => {
        if (newPercentageInput.classList.contains("percentage-input")) {
            newPercentageInput.value = parseFloat(0.00).toFixed(2);
        }

    })

    document.querySelectorAll(".percentage-input").forEach(percentageInput => {
        percentageInput.onchange = () => {

            if (isNaN(parseFloat(percentageInput.value)))
                percentageInput.value = parseFloat(0).toFixed(2);

            percentageInput.value = parseFloat(percentageInput.value).toFixed(2);
            if (parseFloat(percentageInput.value).toFixed(2) > 100.00)
                percentageInput.value = parseFloat(100).toFixed(2);
            else if (parseFloat(percentageInput.value).toFixed(2) < 0.00)
                percentageInput.value = parseFloat(0).toFixed(2);

            controlPercentageInputs()
        };
    });

    sanitizeFormInputs();
}

repeaterRemoveBtnPostActions = () => {

    calculateTotals();
    controlPercentageInputs();

    //const calculationContainers = document.querySelectorAll(".calculation-container");
    //let operands = [];
    //let target = {};
    //let sum = 0.00;
    ////let deletedOperandContainer = $(newRow);
    //let deletedOperand = {};

    //calculationContainers.forEach(calculationContainer => {
    //    operands = calculationContainer.querySelectorAll(".operand");
    //    target = calculationContainer.querySelector(".target");
    //    deletedOperand = newRow.querySelector(".operand");k

    //    operands.forEach(operand => {
    //        if (deletedOperand != operand)
    //            sum += parseFloat(operand.value);
    //    });

    //    target.value = sum;


    //    sum = 0.00;
    //});

    //const percentageInputContainers = document.querySelectorAll(".percentage-input-container ");
    //let percentageInputs = [];
    //sum = 0;
    //let deletedPercentage = newRow.querySelector(".percentage-input");

    //percentageInputContainers.forEach(percentageInputContainer => {
    //    percentageInputs = percentageInputContainer.querySelectorAll(".percentage-input");

    //    percentageInputs.forEach(percentageInput => {
    //        if (deletedPercentage != percentageInput)
    //            sum += parseFloat(percentageInput.value);
    //    })
    //    if (sum === 100.0)
    //        percentageInputContainer.querySelector(".percentage-err").classList.add("d-none");
    //    else
    //        percentageInputContainer.querySelector(".percentage-err").classList.remove("d-none");

    //    sum = 0;
    //});
}

// / Custom Form Repeater


// The timeout is put in order to wait for the translate functionality
//      to finish
//setTimeout(() => {
//        var formRepeater = $(".form-repeater");

//        var row = 2;
//        var col = 1;
//        formRepeater.on('submit', function (e) {
//            e.preventDefault();
//        });
//        formRepeater.repeater({
//            show: function () {
//                var fromControl = $(this).find('.form-control, .form-select');
//                var formLabel = $(this).find('.form-label');
//                let labelContents = [];

//                fromControl.each(function (i) {
//                    var id = 'form-repeater-' + row + '-' + col;
//                    $(fromControl[i]).attr('id', id);
//                    $(formLabel[i]).attr('for', id);
//                    $(formLabel[i]).innerHTML = labelContents[i];
//                    col++;
//                });

//                row++;

//                $(this).slideDown();

//                controlFormExtensions();

//                document.querySelectorAll(".operand").forEach(operand => {
//                    operand.onchange = () => {
//                        if (isNaN(parseFloat(operand.value)) || parseFloat(operand.value) < 0)
//                            operand.value = 0;

//                        calculateTotals();
//                    };
//                });

//                const newPercentageInputs = this.querySelectorAll(".percentage-input");

//                newPercentageInputs.forEach(newPercentageInput => {
//                    if (newPercentageInput.classList.contains("percentage-input")) {
//                        newPercentageInput.value = parseFloat(0.00).toFixed(2);
//                    }

//                })

//                document.querySelectorAll(".percentage-input").forEach(percentageInput => {
//                    percentageInput.onchange = () => {

//                        if (isNaN(parseFloat(percentageInput.value)))
//                            percentageInput.value = parseFloat(0).toFixed(2);

//                        percentageInput.value = parseFloat(percentageInput.value).toFixed(2);
//                        if (parseFloat(percentageInput.value).toFixed(2) > 100.00)
//                            percentageInput.value = parseFloat(100).toFixed(2);
//                        else if (parseFloat(percentageInput.value).toFixed(2) < 0.00)
//                            percentageInput.value = parseFloat(0).toFixed(2);

//                        controlPercentageInputs()
//                    };
//                });

//                sanitizeFormInputs();

//            },
//            hide: function (e) {
//                $(this).slideUp(e);

//                const calculationContainers = document.querySelectorAll(".calculation-container");
//                let operands = [];
//                let target = {};
//                let sum = 0.00;
//                let deletedOperandContainer = $(this);
//                let deletedOperand = {};

//                calculationContainers.forEach(calculationContainer => {
//                    operands = calculationContainer.querySelectorAll(".operand");
//                    target = calculationContainer.querySelector(".target");
//                    deletedOperand = this.querySelector(".operand");

//                    operands.forEach(operand => {
//                        if (deletedOperand != operand)
//                            sum += parseFloat(operand.value);
//                    });

//                    target.value = sum;


//                    sum = 0.00;
//                });

//                const percentageInputContainers = document.querySelectorAll(".percentage-input-container ");
//                let percentageInputs = [];
//                sum = 0;
//                let deletedPercentage = this.querySelector(".percentage-input");

//                percentageInputContainers.forEach(percentageInputContainer => {
//                    percentageInputs = percentageInputContainer.querySelectorAll(".percentage-input");

//                    percentageInputs.forEach(percentageInput => {
//                        if (deletedPercentage != percentageInput)
//                            sum += parseFloat(percentageInput.value);
//                    })
//                    if (sum === 100.0)
//                        percentageInputContainer.querySelector(".percentage-err").classList.add("d-none");
//                    else
//                        percentageInputContainer.querySelector(".percentage-err").classList.remove("d-none");

//                    sum = 0;
//                });
//            }
//        });
//    }
//, 1000);

