import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.scss']
})
export class TryComponent{

  firstnum: any = ''
  secnum: any = ''
  isOpClicked: boolean = false;
  clickedOperator: any = '';
  temp: any = ''
  anss: any = ''
  display:any = '';

  // Click7() {
  //   console.log(this.isOpClicked)
  //   if (this.isOpClicked) {
  //     this.secnum += '7';
  //   }
  //   else {
  //     this.firstnum += '7';
  //   }
  //   console.log('1stnum' + this.firstnum)
  //   console.log('2ndnum' + this.secnum)
  // }

  // push(num:any)
  // {
  //   this.secnum=this.secnum+num
  //   console.log(this.secnum)

  // }
  // clear()
  // {
  //   this.secnum=''
  //   this.firstnum=''
  //   this.temp=''
  //   this.anss=''
  //   console.log("cleared success")
  // }
  // op(op:any){
  //   this.firstnum=this.secnum
  //   this.temp=op
  //   console.log(op)
  //   this.secnum=''
  // }
  // ans(op:any){

  //   this.anss=eval(this.firstnum+this.temp+this.secnum)
  //   console.log(this.anss)
  // }




  push(num: any) {


    if (this.isOpClicked) {
      this.secnum += num;
      this.display = this.secnum
    }
    else {
      this.firstnum += num;
      this.display = this.firstnum;
    }
    console.log('1stnum' + this.firstnum)
    console.log('2ndnum' + this.secnum)
    // if (num != 0) {
    //   this.secnum = (this.secnum + num)
    //   console.log(this.secnum)
    // }
    // else {
    //   console.log(this.secnum)
    // }
  }
  op(op: any) {
    this.isOpClicked = true;
    this.clickedOperator = op;
    this.display = op;
    //this.temp = op
    console.log(op)
    //this.firstnum = this.firstnum
  }
  Equals()
  {
    
    if(this.clickedOperator = '+')
    {
      this.anss = parseInt(this.firstnum) + parseInt(this.secnum)
      
    }
    else  if(this.clickedOperator = '+')
    {

    }
    this.display = this.anss
  }
  clear()
  {
    this.display=''
    this.firstnum=''
    this.secnum=''
    this.clickedOperator=''
  }

  // ans(anss:){

  //   switch (this.temp!=false) {
  //     case +:
  //       this.secnum+first


  //       break;

  //       default:
  //         break;
  //       }
  //    }






}

