import { SearchBarService } from './search-bar.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cryptoapp';
  isDarkEnabled = true;
  showSearchBar = true;

  constructor(
    private route: ActivatedRoute,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    this.searchBarService.showSearchBar$.subscribe((show) => {
      this.showSearchBar = show;
    });
  }

  toggleMode() {
    this.isDarkEnabled = !this.isDarkEnabled;
  }
}
