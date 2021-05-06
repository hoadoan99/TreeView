import { Injectable, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTreeService {

  constructor() { }
  // defined the array of data
  @ViewChild('samples')
  public hierarchicalData: Object[] = [
  { id: '01', name: 'KH Tháng 2  ', expanded: true,
  subChild: [
      {
          id: '01-01', name: 'Tổng'
          // subChild: [
          //     { id: '01-01-01', name: '7-Zip' },
          //     { id: '01-01-02', name: 'Git' },
          //     { id: '01-01-03', name: 'IIS Express' },
          // ]
      },
      {
          id: '01-02', name: 'Số Tn Năm 2020', expanded: true,
          subChild: [
              { id: 'GT', name: 'Giá Trị' },
              { id: 'PT', name: '%' }

          ]
      },
      {
          id: '01-03', name: 'Số Tn-1',
          subChild: [
            { id: 'GT', name: 'Giá Trị' },
            { id: 'PT', name: '%' }
          ]
      },
      {
          id: '01-03', name: 'KH Đến Ngày',
          // subChild: [
          //     { id: '01-03-01', name: 'Boot' },
          //     { id: '01-03-02', name: 'FileManager' },
          //     { id: '01-03-03', name: 'System32' },
          // ]
      }
  ]
},
{
  id: '02', name: 'Kết Quả Ngày',
  subChild: [
      {
          id: '02-01', name: 'Personals',
          subChild: [
              { id: '02-01-01', name: 'My photo.png' },
              { id: '02-01-02', name: 'Rental document.docx' },
              { id: '02-01-03', name: 'Pay slip.pdf' },
          ]
      },
      {
          id: '02-02', name: 'Projects',
          subChild: [
              { id: '02-02-01', name: 'ASP Application' },
              { id: '02-02-02', name: 'TypeScript Application' },
              { id: '02-02-03', name: 'React Application' },
          ]
      },
      {
          id: '02-03', name: 'Office',
          subChild: [
              { id: '02-03-01', name: 'Work details.docx' },
              { id: '02-03-02', name: 'Weekly report.docx' },
              { id: '02-03-03', name: 'Wish list.csv' },
          ]
      },
  ]
},
];
getDataTree(){
 return this.hierarchicalData.slice();
}
}
