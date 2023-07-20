import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

interface CartProduct{
  name:string,
  prize:number,
  amount:number,
  img:string
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  

   products:CartProduct[] = []


   targetNumber:string = ""

   carachterCount = 0  

  constructor(private cartService:CartService){

  }

  formatTargetNumber(){


    let counter = 0
    let newString = ""

    for(let i = 0 ; i<this.targetNumber.length; i++){

      if(counter == 4){
        newString+="-"  
        counter = 0
      }

      newString+=this.targetNumber[i]
      counter++
    } 

    
    this.targetNumber = newString
  }


  updateProduct(product:CartProduct,amount:number){
    this.cartService.updateAmount(product,amount)
  }


  getTotal():number{
    return this.products.reduce((curr,el)=> curr + el.prize*el.amount ,0) 
  }

  ngOnInit(){
    this.cartService.products.subscribe(products=>{
      this.products = products
    })
  }


}
