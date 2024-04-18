function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index');
  }
  
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
  }