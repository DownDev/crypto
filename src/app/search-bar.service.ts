import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  private showSearchBarSubject = new BehaviorSubject<boolean>(true);
  showSearchBar$ = this.showSearchBarSubject.asObservable();

  private searchTerm = new BehaviorSubject<string>('');
  term$ = this.searchTerm.asObservable();

  setShowSearchBar(show: boolean) {
    this.showSearchBarSubject.next(show);
  }

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }
  constructor() {}
}
