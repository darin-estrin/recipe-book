import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { firebaseConfig } from './auth/firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  constructor(private router: Router,
              private authService: AuthService){}

  ngOnInit() {
    firebase.initializeApp({
      apiKey: firebaseConfig.apiKey,
      authDomain: firebaseConfig.authDomain
    });
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/recipes']);
    } else {
      this.router.navigate(['/']);
    }
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
