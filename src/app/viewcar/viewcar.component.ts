import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewcar',
  templateUrl: './viewcar.component.html',
  styleUrls: ['./viewcar.component.css']
})
export class ViewcarComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

fetchData=()=>{
   this.myapi.viewCar().subscribe(
    (data)=>{
      this.carData=data
    }
  )
}


  carData:any=[]
  ngOnInit(): void {
  }

}
