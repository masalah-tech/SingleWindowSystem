function printPdf(pdfName) {
    var pdfUrl = `/Documents/${pdfName}`;
    var pdfWindow = window.open(pdfUrl, '_blank');
    pdfWindow.onload = function () {
        pdfWindow.print();
    };
}

function printPage(controler, view) {
    var pageUrl = `/${controler}/${view}`;
    var pageWindow = window.open(pageUrl, '_blank');
    pageWindow.addEventListener('load', function () {
        pageWindow.print();
    });
}
