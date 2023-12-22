// showConfirmationPopup shows a popup used
//      to confirm a specific procedure
function showConfirmationPopup(triggerBtn) {
    const targetPopup = document.querySelector(triggerBtn.getAttribute("confirm-popup-target"));

    if (targetPopup != null)
        targetPopup.classList.add("active");
    else
        console.log(`Cannot find a target popup with id="${(triggerBtn.getAttribute("confirm-popup-target"))}"`)
}

// hideConfirmationPopup hides a popup used
//      to confirm a specific procedure
function hideConfirmationPopup(triggerBtn) {
    const targetPopup = document.querySelector(triggerBtn.getAttribute("confirm-popup-target"));

    if (targetPopup != null)
        targetPopup.classList.remove("active");
    else
        console.log(`Cannot find a target popup with id="${(triggerBtn.getAttribute("confirm-popup-target"))}"`)
}

// showSuccessfullySentPopup shows a SweetAlert popup indicating 
//      that the form has been successfully sent
function showSuccessfullySentPopup(form) {
    const lang = document.querySelector("html").getAttribute("lang");

    Swal.fire({
        icon: 'success',
        title: lang == "ar" ? 'تم الإرسال بنجاح' : "Sent successfully",
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        form.submit();
    })
}

// showNewOptionPopup shows the new-option popup used to
//      enter a new <option> element to a specifed <select> element
function showNewOptionPopup(senderSelectId) {
    const popup = document.querySelector(".custom-new-option-popup");
    const input = popup.querySelector(".custom-pop-new-entry");
    const hiddenInput = popup.querySelector(".sender-select-id");

    popup.classList.add("active");
    input.focus();

    hiddenInput.value = senderSelectId;
}

// hideNewOptionPopup hides the new-option popup and resets
//      the sender <select> element
function hideNewOptionPopup(senderSelectId) {
    const targetPopup = document.querySelector("#new-option-popup");
    const sendersSelectOptions = document.querySelectorAll(`[custom-id=${senderSelectId}] option`);
    const newOptionInputElem = document.querySelector("#new-option-popup .custom-pop-new-entry");
    const EmptyErrMessageElem = document.querySelector("#new-option-popup .err-empty");

    targetPopup.classList.remove("active");

    sendersSelectOptions.forEach(option => {
        option.removeAttribute("selected");
    });
    sendersSelectOptions[0].setAttribute("selected", "selected");

    newOptionInputElem.value = "";
    EmptyErrMessageElem.classList.add("d-none");
}