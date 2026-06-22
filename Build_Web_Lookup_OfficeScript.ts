/** TIPA Laminates - Build exact Web Lookup from Excel formulas.
Paste into Excel Online > Automate > New Script, then Run. */
function main(workbook: ExcelScript.Workbook) {
  const calc = workbook.getWorksheet("Laminates");
  let out = workbook.getWorksheet("Web Lookup") || workbook.addWorksheet("Web Lookup");
  out.getUsedRange()?.clear();
  const headers = ["Laminate","Total Thickness","Width of Reel","Amount","PR/NonPR","No of Colors","Shipment","Supplier","Margin","Laminate Length","Total Cost EUR","Total Cost USD","Cost/Kg EUR","Cost/Kg USD","Sell Price EUR","Sell Price USD","Structure"];
  out.getRangeByIndexes(0,0,1,headers.length).setValues([headers]);
  const rows = [];
  const scenarios = [
    ["823",121,760,5000,"Printed","5-8","Europe to US","Bastin",0.25],
    ["618",60,760,5000,"Printed","5-8","Europe to US","Bastin",0.20],
    ["428",79,760,5000,"Not Printed","0","Europe to US","Bastin",0.20],
    ["608",100,900,7000,"Not Printed","0","Europe to Europe","Bastin",0.25]
  ];
  for (const s of scenarios) {
    calc.getRange("AD3").setValue(s[0]); calc.getRange("AD4").setValue(s[1]); calc.getRange("AD5").setValue(s[2]); calc.getRange("AD6").setValue(s[3]);
    calc.getRange("AD7").setValue(s[4]); calc.getRange("AD8").setValue(s[5]); calc.getRange("AD9").setValue(s[6]); calc.getRange("AD10").setValue(s[7]); calc.getRange("AD1").setValue(s[8]);
    workbook.getApplication().calculate(ExcelScript.CalculationType.full);
    const structure = calc.getRange("D3:K8").getTexts().filter(r => r[0] !== "" && r[0] !== "No match").map(r => `${r[0]} ${r[7]}`).join(" | ");
    rows.push([s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],calc.getRange("AD19").getText(),calc.getRange("AD14").getText(),calc.getRange("AD15").getText(),calc.getRange("AD16").getText(),calc.getRange("AD17").getText(),calc.getRange("AC25").getText(),calc.getRange("AD27").getText(),structure]);
  }
  out.getRangeByIndexes(1,0,rows.length,headers.length).setValues(rows);
  out.getUsedRange()?.getFormat().autofitColumns();
}
