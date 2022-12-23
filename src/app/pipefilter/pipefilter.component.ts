import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipefilter',
  templateUrl: './pipefilter.component.html',
  styleUrls: ['./pipefilter.component.css']
})
export class PipefilterComponent implements OnInit {
  // namesearch:string = '';
  gendersearch:string='';

  // productArr: any[] = [
  //   {
  //     sno: 1,
  //     name: 'Mobile',
  //     price: '7000 Rs',
  //     availability: 'Available'
  //   },
  //   {
  //     sno: 2,
  //     name: 'TV',
  //     price: '17000 Rs',
  //     availability: 'Available'
  //   },
  //   {
  //     sno: 3,
  //     name: 'Washing Machine',
  //     price: '170000 Rs',
  //     availability: 'Not Available'
  //   },
  //   {
  //     sno: 4,
  //     name: 'Tab',
  //     price: '35000 Rs',
  //     availability: 'Available'
  //   }
  // ]
  EmpArr: any[] = [
    {
      Id: 1,
     gender: 'Male',
     name:'Mr.Rahul patil',
      compony: 'TCS',
      salary: '70000'
    },
    {
      Id: 2,
      gender: 'Male',
      name:'Mr.Sahil patil',
       compony: 'Wipro',
       salary: '80000'
    },
    {
      Id: 3,
      gender: 'Female',
      name:'Ms.Radhika Sharma',
       compony: 'Infosys',
       salary: '90000'
    },
    {
      Id: 4,
     gender: 'Female',
     name:'Ms.Sujata Jadhav',
      compony: 'Sevenmind',
      salary: '120000'
    }
  ]
  constructor() { }


  ngOnInit() {
  }

}
