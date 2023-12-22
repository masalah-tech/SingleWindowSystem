function downloadPdf(fileName) {
    var pdfUrl = `/Documents/${fileName}`;

    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}