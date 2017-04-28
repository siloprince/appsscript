function onOpen() {
  SpreadsheetApp.getUi().createMenu('[Figure]').addItem('Figure', 'figure').addToUi();
}
function figure() {
  var htmlOutput = HtmlService
    .createHtmlOutputFromFile('svg')
    .setWidth(800)
    .setHeight(400);
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'test');
}
