import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CalendarModule,
        MenubarModule,
        MegaMenuModule,
        DataViewModule,
        RatingModule,
        TagModule,
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