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

function onEdit(ev) {
  var range = ev.range;
  var width = range.getWidth();
  var height = range.getHeight();
  if (width!==1 || height!==1) {
    return;
  }
  var formula = range.getFormula();
  if (formula==='=graph') {
    figure();
  }
}