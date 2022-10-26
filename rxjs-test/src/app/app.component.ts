import { Component } from '@angular/core';
import { ClientServicesService } from './services/client-services.service';
//import map from rxjs
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-test';
  public data$: Observable<any>;
  constructor(private clientSer: ClientServicesService) {
    // this.data$ = this.clientSer.getData().pipe(

    //   map(data => {
    //     // let newData = data.data.filter((item: any) => item.userId == 1);
    //     let respone = data.data.map((item: any) => {
    //       // console.log(item)
    //       return { completed: item.completed, id: item.id, title: item.title, userId: item.userId };
    //     })
    //     let newData = respone.filter((item: any) => item.id >= 5);
    //     return newData
    //   }),
    //   tap(data => console.log(data)),
    // )

    // this.data$.subscribe(data => {
    //   console.log(data);
    // })
    this.data$ = this.clientSer.getData().pipe(
      tap(data => console.log(data)),
      switchMap(data1 =>
        this.clientSer.getData2().pipe(
          map(data2 => {
            let newData1 = data1.data.filter((item: any) => item.id >= 5);

            let newData = data2.filter((item: any) => item.id >= 5);
            let res = newData1.concat(newData);


            return res
          }
          ),
          tap(data2 => console.log(data2))


        )
      ),
      tap(data2 => console.log(data2))
    )

    // this.data$ = this.clientSer.getData2().pipe(
    //   // map(data => {

    //   // }
    //   // ),

    //   tap(data => console.log(data)),
    //   filter(data => data.length >0),
    //   tap(data => console.log(data)),

    // )
  }
}

