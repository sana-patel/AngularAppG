// import { Component } from "@angular/core";

import { Component } from "@angular/core";

// @Component({
//     selector: 'app-server',
//     template: `<h1> This is my server component</h1>
//     <h1 class="test1" id="test1">This is h2</h1>
//     {{name}}`,
//     styleUrls: ['./server.component.css']
// })
// export class serverComponent{

//     name: string = 'Codemind';

// }
@Component({
    selector:'app-server',
    template:`<h1>This is my sever component</h1>
    <h2>This is my h2 <h2>
    {{name}}
    `,
    styleUrls:['./server.component.css']
})
export class serverComponent{
 name:string = 'codemind'
}