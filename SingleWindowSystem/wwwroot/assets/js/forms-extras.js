// Form Repeater
// ! Using jQuery each loop to add dynamic id and class for inputs. You may need to improve it based on form fields.
// -----------------------------------------------------------------------------------------------------------------

// Custom Form Repeater

let cRepCounter = 0;

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
        sortFormsetIds($itemsContainer);

        // setNewRowCustomId sets the attribute 'custom-id' of every
        //      child that has that attribute
        setNewRowCustomId($new[0]);

        // removeValidationStyleFromRow removes the validation style from
        //      the row being created by the form repeater
        removeValidationStyleFromRow($new[0]);

        // eventsCore is the only function that calls events on
        //      various elements
        eventsCore();

        // setDefaultPerentValues sets the inputs that have the class 'percentage-inputs'
        //      ot 0.00
        setDefaultPerentValues($new[0]);
    });

    // Remove item
    $(".form-repeater").on("click", ".remove-row-btn", function () {
        var $itemsContainer = $(this).parents('.items-container');
        var item = $(this).parents(".form-repeater").find(".repeater-item");
        if (item.length > 1) {
            $(this).closest(".repeater-item").remove();
            sortFormsetIds($itemsContainer);
        }

        // eventsCore is the only function that calls events on
        //      various elements
        eventsCore();

        const tempOperand = ($itemsContainer[0]).querySelector(".operand");
        const tempPercentageInput = ($itemsContainer[0]).querySelector(".percentage-input");

        if (tempOperand != null) {
            const tempCalContainer =
                document.querySelector(tempOperand.getAttribute("cal-container"));

            // updateSumTarget updates a calculation result target 
            //      upon the values of certain operands
            updateSumTarget(tempCalContainer);
        }

        if (tempPercentageInput != null) {
            const tempCalContainer =
                document.querySelector(tempPercentageInput.getAttribute("cal-container"));

            // checkPercentsTotal makes sure that the total number of 
            //      percentage input values adds to 100.00
            checkPercentsTotal(tempCalContainer);
        }
    });

    // Handle file input change
    $("#form-repeater").on("change", "file-input", function () {
        var file = this.files[0];
        var $input = $(this);
        var $fileName = $input.closest(".repeater-item").find(".file-name");
        file.text(file.name);
    })
})

// setNewRowCustomId sets the attribute 'custom-id' of every
//      child that has that attribute
function setNewRowCustomId(newRow) {
    const objs = newRow.querySelectorAll("[custom-id]");
    let prevId = "";
    let newId = "";

    cRepCounter++;

    objs.forEach(obj => {
        prevId = obj.getAttribute("custom-id");
        newId = `${prevId}-${cRepCounter}`;

        obj.setAttribute("custom-id", newId);
    });
}

// setDefaultPerentValues sets the inputs that have the class 'percentage-inputs'
//      ot 0.00
function setDefaultPerentValues(container) {
    const percentInputs = container.querySelectorAll(".percentage-input");

    percentInputs.forEach(percentInput => {
        percentInput.value = "0.00";
    });
}