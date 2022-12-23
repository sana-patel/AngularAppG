import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipefilter'
})
export class PipefilterPipe implements PipeTransform {

  // transform(val:any,searchTearm:any): any {
  //   return val.filter(function(search){
  //     return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
  //   })
  // }
  transform(value: any, args?:any):any  {
    if(!args){
      return value;
    }
   return value.filter(item=> item.name.indexOf(args)>-1)
      
    }
  }

