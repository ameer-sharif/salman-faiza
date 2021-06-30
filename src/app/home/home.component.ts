import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Howl} from 'howler';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit() {
    var mySong = <HTMLVideoElement>document.getElementById("mySong");
      var icon = <HTMLVideoElement>document.getElementById("icon");

      icon.onclick = function(){
        if(mySong.paused){
          mySong.play();
          icon.src = "/assets/music/pause.png";
        }else{
          mySong.pause();
          icon.src = "/assets/music/play.png";
        }
       
      }

      
  }

  onButtonClick(){
    this.router.navigate(['/tour'])
   }

}

  
 /*  togglePlay(){
    return sound.playing() ? sound.pause() : sound.play();
    }; */
  


/* let sound = new Howl({
  src: ['/assets/music/music.mp3']
    });

 sound.play() */
 


 
