import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ShService } from '../services/sh.service';
import  jspdf from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
  keyParams:string
  constructor(private parms:ActivatedRoute,private cs:ShService,
    private as:AuthService,private fs:AngularFirestore) {
    this.parms.params.subscribe(query=>{
      return this.keyParams=query.key
    })
   }
l:any
n:Date
title = 'html-to-pdf-angular-application';
public convetToPDF()
{
var data = document.getElementById('contentToConvert');
html2canvas(data).then(canvas => {
// Few necessary setting options
var imgWidth = 208;
var pageHeight = 295;
var imgHeight = canvas.height * imgWidth / canvas.width;
var heightLeft = imgHeight;
 
const contentDataURL = canvas.toDataURL('image/png')
let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
var position = 0;
pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
pdf.save('new-file.pdf'); // Generated PDF
});
}

  ngOnInit(): void {
    console.log(this.keyParams)
 
      this.fs.collection('orders').snapshotChanges().subscribe((data)=>{
       console.log(data)
      console.log(JSON.parse(localStorage.getItem('sf')))
       this.n=JSON.parse(localStorage.getItem('sf'))
      this.l=data.map(ele=>{
       return{
            id:ele.payload.doc.id,
            name:ele.payload.doc.data()['name'],
            adress:ele.payload.doc.data()['adress'],
            total:ele.payload.doc.data()['total'],
            uid:ele.payload.doc.data()['uid'],
            date:ele.payload.doc.data()['date']
           }
        
        })
        
      });
    
  }
  

}
