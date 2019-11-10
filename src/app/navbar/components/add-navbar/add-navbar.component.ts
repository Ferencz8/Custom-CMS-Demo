import { Component, OnInit } from '@angular/core';
import { Navbar } from 'src/app/models/navbar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-add-navbar',
  templateUrl: './add-navbar.component.html',
  styleUrls: ['./add-navbar.component.scss']
})
export class AddNavbarComponent implements OnInit {
  navbar$: Observable<Navbar>;
  elementas: Navbar[] = [
    { id: 1, name: 'About', url: '/about', isPublished: false, displayOrder: 1 },
    { id: 2, name: 'Contacts', url: '/contacts', isPublished: true, displayOrder: 2 },
    { id: 3, name: 'Case Studies', url: '/case-studies', isPublished: false, displayOrder: 3 },
    { id: 4, name: 'Education', url: '/education', isPublished: true, displayOrder: 4 }
  ];
  orderVals = [0, 1, 2, 3, 4];
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.navbar$ = of(new Navbar());
    if (this.router.url.includes('edit')) {
      this.navbar$ = this.route.paramMap.pipe(
        map((params: ParamMap) => {
          return this.elementas.find(n => n.id.toString() === params.get('id'));
        })
      );
    }
  }

  cancel() {
    this.router.navigate(['/navbars']);
  }
}
