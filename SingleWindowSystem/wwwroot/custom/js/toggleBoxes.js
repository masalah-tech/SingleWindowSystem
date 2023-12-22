// toggleABoxByACheckbox shows/hides a <div> element
//      based on the state of the checkbox
function toggleABoxByACheckbox(checkbox) {
    let targetBox = document.querySelector(checkbox.getAttribute("c-controls"));

    if (targetBox != null) {
        if (checkbox.checked) {
            targetBox.classList.add("d-none");
        }
        else {
            targetBox.classList.remove("d-none");
        }
    }
}

// showABoxByALink shows a <div> element and 
//      puts some layout on the clicked button container
function showABoxByALink(aLink) {
    const targetBox = document.querySelector(aLink.getAttribute("box-target"));

    resetTargetBoxStates(aLink);

    if (targetBox != null) {
        targetBox.classList.remove("d-none");

        ($(aLink).parent().parent()[0]).classList.add("bg-info");
    }
}

// resetTargetBoxStates resets the states of the target boxes
//      being shown by the function showABoxByALink
function resetTargetBoxStates(aLink) {
    const targetBoxes = document.querySelectorAll(".target-box");
    const aLinkContainersL1 = document.querySelectorAll(".trigger-btn-container-l1");
    const aLinkContainersL2 = document.querySelectorAll(".trigger-btn-container-l2");

    if (aLink.classList.contains("triggers-box-l1")) {
        aLinkContainersL1.forEach(aLinkContainerL1 => {
            aLinkContainerL1.classList.remove("bg-info");
        });

        aLinkContainersL2.forEach(aLinkContainerL2 => {
            aLinkContainerL2.classList.remove("bg-info");
        });

        targetBoxes.forEach(targetBox => {
            targetBox.classList.add("d-none");
        });
    }
    else if (aLink.classList.contains("triggers-box-l2")) {
        aLinkContainersL2.forEach(aLinkContainerL2 => {
            aLinkContainerL2.classList.remove("bg-info");
        });

        targetBoxes.forEach(targetBox => {
            if (targetBox.classList.contains("target-box-l2"))
                targetBox.classList.add("d-none");
        });
    }
}

// showHideBoxesUponSelect toggles <div> elements upon the 
//      the <select> value passed through the parameter
function showHideBoxesUponSelect(conditionSelect) {
    let targetBoxes = document.querySelectorAll(".box-target");

    targetBoxes.forEach(targetBox => {
        const tempRequiredInputs = targetBox.querySelectorAll("[required]");

        removeValidationStyleFromRow(targetBox);

        tempRequiredInputs.forEach(tempRequiredInput => {
            tempRequiredInput.removeAttribute("required");
        })
    });

    targetBoxes.forEach(targetBox => {
        targetBox.classList.remove("active");

        if (targetBox.getAttribute("id") === conditionSelect.value) {
            targetBox.classList.add("active");

            const tempInputValidationContainers = targetBox.querySelectorAll(".mzn-input-container");

            tempInputValidationContainers.forEach(container => {
                const textInput = container.querySelector("input[type=text]:not([readonly])");
                const numberInput = container.querySelector("input[type=number]:not([readonly])");
                const selectInput = container.querySelector("select:not([readonly])");
                const fileInput = container.querySelector("input[type=file]:not([readonly])");
                const dateInput = container.querySelector("input[type=date]:not([readonly])");
                const textareaInput = container.querySelector("textarea:not([readonly])");
                const emailInput = container.querySelector("input[type=email]:not([readonly])");
                const datetimeInput = container.querySelector("input[type=datetime-local]:not([readonly])");

                if (textInput != null)
                    textInput.setAttribute("required", "required");

                if (numberInput != null)
                    numberInput.setAttribute("required", "required");

                if (selectInput != null)
                    selectInput.setAttribute("required", "required");

                if (fileInput != null)
                    fileInput.setAttribute("required", "required");

                if (dateInput != null)
                    dateInput.setAttribute("required", "required");

                if (textareaInput != null)
                    textareaInput.setAttribute("required", "required");

                if (emailInput != null)
                    emailInput.setAttribute("required", "required");

                if (datetimeInput != null)
                    datetimeInput.setAttribute("required", "required");
            });
        }
    })
}
