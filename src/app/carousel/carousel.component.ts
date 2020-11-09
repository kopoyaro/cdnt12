import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  i:number=0;
  photos = [
    "https://static.actu.fr/uploads/2019/10/chien-960x640.jpg",
    "https://images.sudouest.fr/2020/01/21/5e27092366a4bd6733ae5f03/widescreen/1000x500/plus-de-14700-bergers.jpg?v1",
    "https://blog.europ-assistance.be/wp-content/uploads/thumbs/sad_dog-nrz00skf6yp9atl196bt1g8cng5xii68l9jt2e7xvs.jpg",
    "https://www.canalvie.com/polopoly_fs/1.1422594.1524076568!/image/bebe-labrador.jpg_gen/derivatives/cvlandscape_670_377/bebe-labrador.jpg"
  ];
  
  photo = this.photos[this.i];
  
  constructor() {
    setInterval(() =>{
      
      this.photo = this.photos[this.i++]
      if(this.i==this.photos.length){
        this.i=0;
      }
    },3000);
  }
}
