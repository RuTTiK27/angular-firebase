import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(), 
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"ang-fire-137f5","appId":"1:790990143121:web:d2a1d0669e378102190930","storageBucket":"ang-fire-137f5.appspot.com","apiKey":"AIzaSyCK_n4sJhHLjptvT0UCERBM-z9xGAzyupI","authDomain":"ang-fire-137f5.firebaseapp.com","messagingSenderId":"790990143121"})), provideFirestore(() => getFirestore()),
    
  ]
};
