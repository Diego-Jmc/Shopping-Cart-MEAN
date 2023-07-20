import { Component } from '@angular/core';


interface CartProduct{
  name:string,
  prize:number,
  amount:number,
  img:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shopping-cart';


  carProducts:CartProduct[] = []
 



  addCartProduct(product:CartProduct){

    const index = this.carProducts.findIndex((e) => e.name === product.name);

    if (index !== -1) {
      this.carProducts[index].amount++;
    } else {
      this.carProducts.push(product);
    }

  }

}
