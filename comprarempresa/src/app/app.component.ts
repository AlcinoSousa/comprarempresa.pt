import { Component, OnInit } from '@angular/core';

interface BusinessAd {
    name: string,
    address: string,
    type: string,
    price: string,
    picture: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    rangeValues: number[] = [20, 80];

    businessAds!: BusinessAd[];

    constructor() { }

    ngOnInit() {
        this.businessAds = [
            {
                name: 'Primavera em Flor',
                address: 'Coimbra',
                type: 'Floricultura',
                price: '6 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Cortes & Estilos',
                address: 'Porto',
                type: 'Cabeleireiro',
                price: '10 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'

            },
            {
                name: 'Páginas Encantadas',
                address: 'Lisboa',
                type: 'Livraria',
                price: '10 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Cantinho dos Sabores',
                address: 'Aveiro',
                type: 'Mercearia',
                price: '13 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'TransGlobal',
                address: 'Vila Real',
                type: 'Transportes',
                price: '16 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Sabores de Portugal',
                address: 'Lisboa',
                type: 'Restaurante',
                price: '20 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'AtivaFit',
                address: 'Porto',
                type: 'Ginásio',
                price: '25 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Fundação Forte',
                address: 'Lisboa',
                type: 'Construção',
                price: '40 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Primavera em Flor',
                address: 'Coimbra',
                type: 'Floricultura',
                price: '6 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Primavera em Flor',
                address: 'Coimbra',
                type: 'Floricultura',
                price: '6 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Primavera em Flor',
                address: 'Coimbra',
                type: 'Floricultura',
                price: '6 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            },
            {
                name: 'Primavera em Flor',
                address: 'Coimbra',
                type: 'Floricultura',
                price: '6 000€',
                picture: '/assets/ads-pictures/flower-shop.jpg'
            }
        ];
    }
}

