import { Component, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  title = 'comprarempresa';
  date: Date = new Date();
  
  ngOnInit(): void {
    
  }
}
