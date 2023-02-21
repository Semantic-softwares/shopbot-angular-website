import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MerchantsService {
  merchants!: any[];
  private hostServer: string = environment.hostUrl;
  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {}

  getMerchants(): Observable<any[]> {
    return this._httpClient.get<any[]>(`${this.hostServer}/merchants`);
  }

  getMerchant(id:any): Observable<any> {
    return this._httpClient.get<any>(`${this.hostServer}/merchants/${id}`);
  }

  deleteMerchant(id:string): Observable<any> {
    return this._httpClient.delete<any>(`${this.hostServer}/merchants/${id}`);
  }

  updateMerchant(id:string, params: any) : Observable<any> {
    return this._httpClient.put<any>(`${this.hostServer}/merchants/${id}`, params);
  }

  createMerchant(params: any) : Observable<any> {
    return this._httpClient.post<any>(`${this.hostServer}/merchants`, params);
  } 
}