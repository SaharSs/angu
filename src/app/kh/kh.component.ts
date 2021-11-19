import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { ActivatedRoute } from '@angular/router';
import { ShService } from '../services/sh.service';
import  jspdf from 'jspdf'
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-kh',
  templateUrl: './kh.component.html',
  styleUrls: ['./kh.component.css']
})
export class KhComponent implements OnInit {
  searchCategory:any;
  productList:any;
  dataProduct={
    id:'',
    name:'',
    adress:'',
    total:'',
    date:'',
    
  }
  constructor( private activatedRoute: ActivatedRoute,
    private productsService: ShService,private fs:AngularFirestore) { 
      this.activatedRoute.params.subscribe(data => {
        console.log(data.key);
        return this.searchCategory = data.id;
        
      })
    }
    title = 'html-to-pdf-angular-application';
    public convetTo()
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
    
  
   
    this.fs.collection("orders").ref.doc(this.searchCategory).get().then(data=>{
      console.log(data.data())
      this.dataProduct.id=data.data()['id']
      this.dataProduct.adress=data.data()['adress']
      this.dataProduct.name=data.data()['name']
      this.dataProduct.total=data.data()['total']
      this.dataProduct.date=data.data()['date'].toDate()
   
    })

  }
  


  }

