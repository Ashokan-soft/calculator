import { Component } from '@angular/core';

@Component({
  selector: 'app-cal2',
  templateUrl: './cal2.component.html',
  styleUrls: ['./cal2.component.scss']
})
export class Cal2Component {

  // variables--------

  firstnum: any = ''
  secnum: any = ''
  opclicked: boolean = false
  afterClicked: any = ''

  // viewports----------
  input: any = ''
  Result: any = ''

  push(num: any) {

    if (this.opclicked) {
      this.secnum = this.secnum + num;
      this.input=this.input +num
    }
    else {
      this.firstnum = this.firstnum + num
      this.input=this.input+num

    }
    console.log("fnum : " + this.firstnum)

    console.log("secnum : " + this.secnum)
  }

  op(op: any) {

    this.opclicked = true;
    this.afterClicked = op;
    this.input=this.input+op;

    console.log(this.afterClicked)

  }







  Equals() {

    switch (this.afterClicked) {
      case '+':
        this.Result = parseInt(this.firstnum) + parseInt(this.secnum)
        console.log(this.Result)
        break;
      case '-':
        this.Result = parseInt(this.firstnum) - parseInt(this.secnum)
        console.log(this.Result)
        break;
      case '*':
        this.Result = parseInt(this.firstnum) * parseInt(this.secnum)
        console.log(this.Result)
        break;
      case '/':
        this.Result = parseInt(this.firstnum) / parseInt(this.secnum)
        console.log(this.Result)
        break;
      case '%':
        this.Result = parseInt(this.firstnum) % parseInt(this.secnum)
        console.log(this.Result)
        break;
      case '^2':
        this.Result = parseInt(this.firstnum) * parseInt(this.firstnum)
        console.log(this.Result)
        break;
      case ' : sqrt':
        this.Result = parseInt(this.firstnum) + parseInt(this.secnum)
        console.log(this.Result)
        break;
      case ': 1/x':
        this.Result = 1 / parseInt(this.firstnum)
        console.log(this.Result)
        break;

      default:
        break;
    }
  }



  clear() {
  this.firstnum = ''
  this.secnum = ''
  this.opclicked  = false
  this.afterClicked  = ''


  this.input  = ''
  this.Result = ''
   }





}
