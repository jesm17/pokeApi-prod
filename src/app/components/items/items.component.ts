import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  l:number=12 ;
  o:number=0;
  hidden:boolean=false
  items:any = [];
  item:any = [];
  constructor(private pokemonServices:PokemonService) { }

  ngOnInit(): void {
    this.getItems();
  }
  getItems(){
    this.pokemonServices.getItems(this.l,this.o).subscribe(
      (res:any)=>{
        console.log(res);

        for (let i = 0; i < res.results.length; i++) {
          const element = res.results[i];
          this.items = element.name;


          this.pokemonServices.getItem(this.items).subscribe(
            (res: any) => {
              this.item[i] = res
            }, err => {
              console.log(err);
            }
          )
        }
        console.log(this.item);
      },err=>{
        console.log(err);
      }
    )
  }
  nextItem() {
    this.hidden = true
    this.o = this.o + 12;
    this.getItems()
  }

  backItem() {
    console.log(this.o);
    if (this.o == 12) {
      this.hidden = false
    }
    this.o = this.o - 12;
    this.getItems()
  }

  darkMode() {
    
  }

}
