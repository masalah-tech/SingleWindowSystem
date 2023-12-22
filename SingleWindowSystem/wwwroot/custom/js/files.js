// putFileName puts the uploaded file name in the
//      innerHTML of a specifed target element
function putFileName(target, fileElem) {
    target.innerHTML = fileElem.files[0].name;
}