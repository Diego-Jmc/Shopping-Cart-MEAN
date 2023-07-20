import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CartProduct{
  name:string,
  prize:number,
  amount:number,
  img:string
}

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private cartProducts:CartProduct[] = [] 

  private _products:BehaviorSubject<CartProduct[]>

  constructor() { 

    this._products  = new BehaviorSubject<CartProduct[]>([])

  }

  get products(){
    return this._products.asObservable()
  }


  updateAmount(product:CartProduct,amount:number){
        
    const index:number = this.cartProducts.findIndex(e=> e.name == product.name)

    if(index !=-1){
      this.cartProducts[index].amount+=amount
      if(this.cartProducts[index].amount == 0 ){
        this.cartProducts.splice(index,1)
      }
    }

    this._products.next(this.cartProducts)

  }

  addNewProduct(product:CartProduct){

    const index:number = this.cartProducts.findIndex(e=> e.name == product.name)
    
    if(index != -1){
     this.cartProducts[index].amount++
    }else{
      this.cartProducts.push(product)
    }


    this._products.next(this.cartProducts)
  }


}
