import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpclient : HttpClient) { }

  addEndPoint : any = 'http://localhost:5129/api/ProductApi/productAdd';
  productDetailsEndPoint : any = 'http://localhost:5129/api/ProductApi/productDetails';
  deleteEndPoint : any = 'http://localhost:5129/api/ProductApi/deleteProduct';
  updateEndPoint : any = 'http://localhost:5129/api/ProductApi/updateProduct';
  
  ViewProductDetails() : Observable<any>
  {
    return this.httpclient.get(this.productDetailsEndPoint);
  }

  AddProductDetails(PostObj : any) : Observable<any>
  {
    return this.httpclient.post(this.addEndPoint, PostObj);
  }

  DeleteProductDetails(deleteId : number) : Observable<any>
  {
    // return this.httpclient.delete(`${this.deleteEndPoint}/${deleteId}`);
    return this.httpclient.post(`${this.deleteEndPoint}/${deleteId}`, deleteId);
  }

  UpdateProductDetails(updateId : number, PostObj : any) : Observable<any>
  {
    return this.httpclient.post(`${this.updateEndPoint}/${updateId}`, PostObj);
  }

}
