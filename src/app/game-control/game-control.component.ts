import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements  OnInit {

  constructor() { }
  counter: number;
  gameStatus = 'Сыграем?';
  bone = [ 8, 15, 1, 11, 5, 12, 6, 3, 2, 0, 9, 13, 10, 4, 14, 7] ;
  boneStatus = [false, false , false, false, false, false , false, false, false, false , false, false, false, false , false, false];
  indexZero: number;

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onStart() {
    this.shuffleBone(this.bone);
    this.counter = 0;
    this.gameStatus = '....';
    this.setBoneStatus();
  }

  // tslint:disable-next-line:typedef
  onStop() {
    this.gameStatus = 'Сыграем?';
    for (let i = 0; i < this.boneStatus.length; i++) {this.boneStatus[i] = false; }
  }

  // tslint:disable-next-line:typedef
  setBoneStatus() {
    for (let i = 0; i < this.boneStatus.length; i++) {this.boneStatus[i] = false; }
    for (let i = 0; i < this.boneStatus.length; i++) {
      if (this.bone[i] === 0)  {
        this.boneStatus[i] = false;
        this.indexZero = i;
        if ((i + 1 ) <= this.boneStatus.length) { this.boneStatus[ i + 1 ] = true; }
        if ((i - 1 ) >= 0) { this.boneStatus[ i - 1 ] = true; }
        if ((i + 4 ) <= this.boneStatus.length) { this.boneStatus[ i + 4 ] = true; }
        if ((i - 4 ) >= 0) { this.boneStatus[ i - 4 ] = true; }
      }
    }
  }

  // tslint:disable-next-line:typedef
  onBoneClick(indexBone: number ) {
    this.counter ++;
    this.bone[this.indexZero] = this.bone[indexBone];
    this.bone[indexBone] = 0;
    this.setBoneStatus();
  }

  // tslint:disable-next-line:typedef
  shuffleBone(boneField) {
    for (let i = boneField.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [boneField[i], boneField[j]] = [boneField[j], boneField[i]];
    }
  }
}


