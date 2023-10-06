import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elRef:ElementRef){}

  title = 'carlos-personal-website';
  ngOnInit(){
    const hiddenEl = document.querySelectorAll('.hidden');
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }else{
          entry.target.classList.remove('show');
        }
      })
    })
    hiddenEl.forEach((el)=>observer.observe(el));
    
    const hiddenEl2 = document.querySelectorAll('.card-hidden');
    const observer2 = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('card-show');
        }else{
          entry.target.classList.remove('card-show');
        }
      })
    })
    hiddenEl2.forEach((el)=>observer2.observe(el));
  
  }
}
