import { CryptoHistory, CryptoPrice } from './interfaces/CryptoHistory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CryptoAsset,
  CryptoAssets,
  CryptoDetails,
} from './interfaces/CryptoAssets';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTableData(limit: number = 50): Observable<CryptoDetails[]> {
    return this.http
      .get<CryptoAssets>(`https://api.coincap.io/v2/assets?limit=${limit}`)
      .pipe(map((response) => response.data));
  }

  getHistoryData(id: string): Observable<CryptoPrice[]> {
    return this.http
      .get<CryptoHistory>(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      )
      .pipe(map((response) => response.data));
  }

  getAssetById(id: string): Observable<CryptoDetails> {
    return this.http
      .get<CryptoAsset>(`https://api.coincap.io/v2/assets/${id}`)
      .pipe(map((response) => response.data));
  }
}
