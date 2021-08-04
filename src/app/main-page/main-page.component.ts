import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';
import { Ireport } from '../ireport';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  reports : any;
  local = new FormControl('');
  dateFrom = new FormControl('');
  dateTo = new FormControl('');
  headers = ["Nazwa", "Data", "Uzytkownik", "Lokal"];
  headersOrginal = ["name", "dateOfRaport", "userName", "localName"];
  
  async ngOnInit(): Promise<void> {
    this.reports = await this.apiService.getReport(null, null, null);
  }

  async refreshReport()
  {
    this.reports = await this.apiService.getReport(this.local, this.dateFrom, this.dateTo);
  }

}
