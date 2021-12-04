import { Component, ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';
import { DataService } from './data.service';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class UploadComponent  {

  // https://github.com/faisal5170/Angular7-readCSV

  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  constructor(private dataService: DataService) {

  }

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.staffIdentifier = curruntRecord[0].trim();
        csvRecord.staffName = curruntRecord[1].trim();
        csvRecord.staffChances = curruntRecord[2].trim();
        csvArr.push(csvRecord);
      }
    }

    console.log(csvArr);
    this.dataService.data = csvArr;

    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }
}
