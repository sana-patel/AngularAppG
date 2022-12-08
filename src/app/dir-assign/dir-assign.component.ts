import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-assign',
  templateUrl: './dir-assign.component.html',
  styleUrls: ['./dir-assign.component.css']
})
export class DirAssignComponent implements OnInit {
  showSecret= false
log=[];
  constructor() { }

  ngOnInit() {
  }

  onToggleDetails(){
    this.showSecret = !this.showSecret
    this.log.push(this.log.length+1)
  }
}
