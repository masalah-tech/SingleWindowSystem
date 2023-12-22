// putTodayInInput puts the date of today every input element
//      that has the class 'put-today'
function putTodayInInput() {
    const targets = document.querySelectorAll("input.put-today");
    const today = new Date()

    targets.forEach(target => {
        target.value = today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
    });
}