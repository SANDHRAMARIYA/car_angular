import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {

  constructor(private myapi:ApiService) { }


carname=""
carcolor=""
carbrand=""
cardescription=""
carprice=""
status:boolean=false

readValues=()=>{
  let data={
    "carname":this.carname,
    "carcolor":this.carcolor,
    "carbrand":this.carbrand,
    "cardescription":this.cardescription,
    "carprice":this.carprice
  }
console.log(data)
this.myapi.addCar(data).subscribe(
  (response)=>{
  console.log(response)
  alert("success")
  this.carname=""
  this.carcolor=""
  this.carbrand=""
  this.cardescription=""
  this.carprice=""
  this.status=true
  }
)
  }
  


  ngOnInit(): void {
  }

}
