// updateSumTarget updates a calculation result target 
//      upon the values of certain operands
function updateSumTarget(calContainer) {
    const operands = calContainer.querySelectorAll(".operand");
    const resultTarget = calContainer.querySelector(".target");
    let sum = 0.00;

    operands.forEach(operand => {
        sum += parseFloat(operand.value);
    });

    resultTarget.value = `${parseFloat(sum).toFixed(2)}`;
}