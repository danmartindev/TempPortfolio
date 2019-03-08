import { Component, ViewChild, ElementRef, AfterViewInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit{

  // screenHeight:any;
  // @ViewChild('foot') myFooter: ElementRef;


  // constructor() {
  //   this.onResize();
  // } 

  // onResize(event?) {
  //   this.screenHeight = window.innerHeight;
  // }

  // @HostListener('window:resize', ['$event'])
  // getScreenSize(event?) {
  //   this.screenHeight = window.innerHeight;
  //   console.log(this.screenHeight);
  // }

  ngAfterViewInit(){
    // console.log(this.myFooter.nativeElement);
    // this.myFooter.nativeElement.offsetHeight = this.screenHeight;
    // this.myFooter.nativeElement.offsetTop = this.screenHeight;
  }
}
