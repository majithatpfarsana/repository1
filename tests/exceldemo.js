const exceljs=require('exceljs');

async function readExcelfile() {
const workbook=new exceljs.Workbook();
await workbook.xlsx.readFile("C:/Users/mjdfr/Downloads/Obsqura Testing.xlsx");
const worksheet=workbook.getWorksheet("Sheet1");
worksheet.eachRow((row,rowNumber)=>{
    console.log(`row${rowNumber}values:`,row.values);
    
})

   //worksheet.eachRow((row, rowNumber) => {
       // row.eachCell((cell, colNumber) => {
            //console.log(cell.value);
        //}); 
   // })
}
readExcelfile();