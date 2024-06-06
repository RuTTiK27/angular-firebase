import { Component, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Firestore, addDoc, collection } from '@firebase/firestore';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-firebase';

constructor(private firestore: Firestore){

}

  addData(f:any){
    
    const collectionInstance = collection(this.firestore,"users");
    addDoc(collectionInstance,f.value).then(()=>{
      console.log('Data Saved Successfully');
    })
    .catch((err)=>{
      console.log(err);
      
    })
    
  }
}
