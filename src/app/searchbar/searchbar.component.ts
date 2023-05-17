import { SearchBarService } from './../search-bar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchTerm = '';

  constructor(private searchBarService: SearchBarService) {}

  search() {
    this.searchBarService.setSearchTerm(this.searchTerm);
  }
}
