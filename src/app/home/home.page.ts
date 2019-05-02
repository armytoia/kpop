import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 val1: number = 0;
 val2: number = 0;
 val3: number = 0;

  verificar():void{
    let val1 = Number(this.val1);
    let val2 = Number(this.val2);
    let val3 = Number(this.val3);

    if(val1 > val2 && val1 > val3 ){
      alert(val1 + ' é o maior número');
    }
    else if(val2 > val1 && val2 > val3){
      alert(val2+ "é o maior número");
    }
    else if(val3 > val1 && val3 > val2){
      alert(val3 +"é o maior número");
    }
    else{
    alert('os números são iguais');
    }
    }
  }
