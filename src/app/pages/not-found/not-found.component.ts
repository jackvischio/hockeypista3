import { Component } from '@angular/core';

// default 404 page for undefined routes
@Component({
  selector: 'app-not-found',
  template: `
    <div class="d-flex align-items-center justify-content-center" style="height: 90vh">
      <div class="text-center">
          <h1 class="display-1 fw-bold text-warning">404</h1>
          <p class="fs-3">
            <span class="text-danger">Opps!</span> Page not found.</p>
          <p class="lead">
              The page you’re looking for doesn’t exist.
            </p>
          <a routerLink="/home" class="btn btn-primary">Go Home</a>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {

  constructor() { }
}