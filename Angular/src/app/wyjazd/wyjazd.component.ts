import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-wyjazd',
  templateUrl: './wyjazd.component.html',
  styleUrls: ['./wyjazd.component.css']
})
export class WyjazdComponent implements OnInit {
  oplacono: string = 'rampa zamknięta';
  bioSection = new FormGroup({
    rejestracja: new FormControl('', [Validators.required]),

  });
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
  }
  Submit() {
    console.log(this.bioSection.value.rejestracja);
    this.http.delete('http://localhost:5170/ExitGate/Exit?registration=' + this.bioSection.value.rejestracja,{responseType: 'text'} ).subscribe(result => {
      this.oplacono = result;
      sessionStorage.setItem("oplata", this.oplacono);
      alert(sessionStorage.getItem("oplata"));
      window.location.reload();
    }, error => console.log(error));
  }
}
