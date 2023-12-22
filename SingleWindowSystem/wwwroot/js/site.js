$(function () {

    $("#loaderbody").addClass('hide');
    $(document).bind('ajaxStart', function () {
        $("#loaderbody").removeClass('hide');
    }).bind('ajaxStop', function () {
        $("#loaderbody").addClass('hide');
    });

});


showInPopup = (url, title) => {
    $.ajax({
        type: "GET",
        url: url,
        success: function (res) {
            $("#form-modal .modal-body").html(res);
            $("#form-modal .modal-title").html(title);
            $("#form-modal").modal('show');
        }
    });
};
hideInPopup = () => {
    $("#form-modal .modal-body").html('');
    $("#form-modal .modal-title").html('');
    $("#form-modal").modal('hide');
};

//hidePopupForAddType = elementID => {
//    //let addNewOption = {};

//    document.querySelector("#hide-new-option-popup").onclick = () => {
//        var c = $('#' + elementID).find('option[value="select"]').show();
//        $("#addNewActivityModal").modal('hide');
//        $('#' + elementID).val("Select");
//    }

//    //$('.select-with-other-option option[value="addNew"]').remove();
//    //$('.select-with-other-option').append($('.select-with-other-option option[value="addNew"]'));

//};

//controlOtherOptkionPopups = elementID => {

    //const selectElement = document.querySelector("#" + elementID);
    //const selectOptions = selectElement.querySelectorAll("option");

    //selectElement.onchange = () => {
    //    if (selectElement.selectedIndex === selectOptions.length - 1) {
//            $(function () {
//                $('#' + elementID).append($('#' + elementID + ' option[value="addNew"]'));
//                $('#' + elementID).change(function () {
//                    if ($(this).val() === 'addNew') {
//                        // Show the modal to capture the new activity type
//                        $('#addNewActivityModal').modal('show');
//                         console.log("lkj")
//                    }
//                    $(this).find('option[value="Select"]').hide();
//                });

//                $('#addNewActivityForm').submit(function (e) {
//                    e.preventDefault();

//                    // Get the new activity name from the form input
//                    var newActivityName = $('#newActivityName').val();

//                    console.log(newActivityName)

//                    // Add the new activity name as a new option in the select element
//                    $('#' + elementID).append($('<option>', {
//                        value: newActivityName,
//                        text: newActivityName
//                    }));

//                    $('#' + elementID).append($('#' + elementID + ' option[value="addNew"]'));
//                    // Select the newly added option
//                    $('#' + elementID).val(newActivityName);

//                    // Hide the modal
//                    $('#addNewActivityModal').modal('hide');
//                });
//            });
//            hidePopupForAddType(elementID);
//        //}
//    //}

//}



jQueryAjaxPost = form => {

    try {
        $.ajax({
            type: "POST",
            url: form.action,
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                if (res.isValid) {
                    updateLang();
                    $("#view-all").html(res.html);
                    $("#form-modal .modal-body").html('');
                    $("#form-modal .modal-title").html('');
                    $("#form-modal").modal('hide');
                    $.notify('Submitted sussessfully', { globalPostion: 'top center', className: 'success' });

                    
                }
                else
                    $("#form-modal .modal-body").html(res.html);

                
            },
            error: function (err) {
                console.log(err);
            }
        })
    }
    catch (e) {
        console.log(e);
    }
   
    //to prevent default form submit event
    return false;
};


jQueryAjaxDelete = form => {

    if (confirm("Are you sure to delete this record?"))
        try {
            $.ajax({
                type: "POST",
                url: form.action,
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (res) {
                    $("#view-all").html(res.html);
                    $.notify('Delete sussessfully', { globalPostion: 'top center', className: 'success' });
                    updateLang();
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }
        catch (e) {
            console.log(e);
        }

    //to prevent default form submit event
    return false;
}
jQueryAjaxDisable = form => {

    if (confirm("Are you sure to Disable Account this User?"))
        try {
            $.ajax({
                type: "POST",
                url: form.action,
                data: new FormData(form),
                contentType: false,
                processData: false,
                success: function (res) {
                    $("#view-all").html(res.html);
                    $.notify('Delete sussessfully', { globalPostion: 'top center', className: 'success' });
                    updateLang();
                },
                error: function (err) {
                    console.log(err);
                }
            })
        }
        catch (e) {
            console.log(e);
        }

    //to prevent default form submit event
    return false;
}

/*$("#pagination-here").bootpag({
    total: 10,
    page: 1,
    maxVisible: 5,
    leaps: true,
    href: "#result-page-{{number}}"
})

$("#pagination-here").on("page", function (event, num) {
    $("#content").html("page" + num);
});*/


sortFormsetIds = () => {
    var rows = $("#form-repeater").children("[data-repeater-item]")

    $.each(rows, function (i, row) {
        $(this).children(".repeater-box").find("input, select").each(function (j, element) {
            var newString = $(this).attr("name");
            newString = newString.replace(/\[.*?\]/g, "");
            $(this).attr("id", "id-" + i + "-" + newString.replace("Forms.", ""));
            $(this).attr("name", $(this).attr("name").replace(/\[.*?\]/g, `[${i}]`));
        })
    })
}

/*getSelectedOptions = () => {
    let selects = $("#form-repeater").children("select");

    console.log(getSelectedValue(selects[0]))

    return selects;
}
*/

/*getSelectedValue = (selectElement) => {
    let options = selectElement.querySelectorAll("option");
    let selectedValue = "";

    options.forEach(option => {
        if (option.html == options[selectElement[selectElement.selectedIndex])
            selectedValue = option.html;
    })

    return selectedValue;
}*/