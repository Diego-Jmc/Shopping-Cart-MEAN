import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface Product{
  name:string,
  description:string,
  prize:number,
  amount:number,
  img:string
}


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {


  constructor(private cartService:CartService){
    
  }

  products: Product[] = [
    {
      name: 'Soccer Ball',
      description: 'A high-quality soccer ball for training and matches',
      prize: 29.99,
      amount: 1,
      img: '../assets/ball.jpg'
    },
    {
      name: 'Basketball Shoes',
      description: 'Professional basketball shoes with excellent grip and support',
      prize: 99.99,
      amount: 1,
      img: '../assets/basketball-shoes.jpg'
    },
    {
      name: 'Fitness Tracker',
      description: 'Track your workouts and monitor your performance with this fitness tracker',
      prize: 79.99,
      amount: 1,
      img: '../assets/tracker.jpg'
    },
    {
      name: 'Tennis Racket',
      description: 'A top-quality tennis racket for precise shots and control',
      prize: 149.99,
      amount: 1,
      img: '../assets/tennis-racket.jpg'
    },
    {
      name: 'Baseball Glove',
      description: 'A durable baseball glove for catching and fielding',
      prize: 49.99,
      amount:1,
      img: '../assets/baseball-glove.jpg'
    },
  ];
  


  buyArticle(product:Product){


    this.cartService.addNewProduct(product)

  }

  
}
