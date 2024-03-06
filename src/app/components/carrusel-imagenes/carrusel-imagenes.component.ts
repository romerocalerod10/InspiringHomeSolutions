import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbCarousel} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carrusel-imagenes',
  templateUrl: './carrusel-imagenes.component.html',
  styleUrls: ['./carrusel-imagenes.component.css']
})
export class CarruselImagenesComponent implements OnInit {

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel | undefined;

  productos: Producto[] = [];

  constructor() {
  }

  ngOnInit(): void {
    const product1 = new Producto(1, "Silla Salvaescaleras FLOW X", "./assets/img/sillasalvaescalerasflowx.webp");
    const product2 = new Producto(2, "Silla Salvaescaleras CURVA DOBLE RAÍL", "./assets/img/sillasalvaescalerascurvadoblerail.png");
    const product3 = new Producto(3, "Silla Salvaescaleras HOMEGLIDE", "./assets/img/sillasalvaescalerashomeglide.webp");
    const product4 = new Producto(4, "Silla Salvaescaleras RECTA", "./assets/img/sillasalvaescalerasrecta.webp");
    const product5 = new Producto(5, "Plataforma RECTA", "./assets/img/plataformarecta.webp");
    const product6 = new Producto(6, "Plataform SUPRA CURVA", "./assets/img/plataformasupracurva.webp");

    this.productos.push(product1);
    this.productos.push(product2);
    this.productos.push(product3);
    this.productos.push(product4);
    this.productos.push(product5);
    this.productos.push(product6);
  }

  prevSlide() {
    this.carousel?.prev();
  }

  nextSlide() {
    this.carousel?.next();
  }

}

export class Producto {
  id: number | undefined;
  name: string | undefined;
  imageUrl: string | undefined;

  constructor(id: number, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
  }
}
