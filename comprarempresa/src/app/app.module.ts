import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DataViewModule } from 'primeng/dataview';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        DataViewModule,
        FormsModule,
        AccordionModule,
        SliderModule,
        InputNumberModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }