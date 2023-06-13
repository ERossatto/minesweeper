import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';

class Field {
  x = 0
  y = 0
  clicked = false
  hasBomb = false
  hasFlag = false
  _size = 0
  set size(s: number) { this._size = s }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private screenWidth: number
  private screenHeight: number

  public fieldList: Field[] = []
  public fieldAmount: number = 77

  constructor(
    private renderer: Renderer2
  ) {
    for (let i = 0; i < this.fieldAmount ; i++) {
      this.fieldList.push(new Field)
    }
  }

  ngOnInit(): void {
    this._getScreenSize()
  }

  // @HostListener('window:resize')
  private _getScreenSize() {
    this.screenWidth = window.innerWidth
    this.screenHeight = window.innerHeight
    console.log('Screen Width: ' + this.screenWidth)
    console.log('Screen Height: ' + this.screenHeight)
  }

  public getFieldSize(): number {
    const fieldSize = this.screenWidth / 7
    return fieldSize
  }

}
