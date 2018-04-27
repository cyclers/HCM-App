import { Component, OnInit } from '@angular/core';
import { PdmService } from '../../../../../services/pdm.service';
import { NgModel } from '@angular/forms'
import * as _ from 'lodash'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styles: []
})
export class AddressComponent implements OnInit {
  Addresses:Address
  

  constructor(private pdmService: PdmService) { }


  ngOnInit() {
  }


  loadInfoPageAddress(id: number){
    this.pdmService.loadStaffRecord(id + '/Addresses/')
    .subscribe(data => {this.Addresses = _.last(data)
   
    })

    }
    
}

export interface Address {
  EmpID: number;
  StaffId: number;
  Address1: string;
  Address2: string;
  PostalCode: string;
  City: string;
  Country: string;
  PrivateEmail: string;
  BusinessEmail: string;
  PrivateCell: string;
  EmergencyName1: string;
  Relationship1: string;
  Phone1: string;
  EmergencyName2: string;
  Relationship2: string;
  Phone2: string;
  
}
