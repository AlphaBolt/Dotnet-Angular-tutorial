import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../Service/product.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit
{
  prodDetails : any;
  username : any;
  prodId : any;
  status : any;

  constructor(private productservice : ProductService)
  {
    this.username = sessionStorage.getItem('User');
    this.status = sessionStorage.getItem("status");
  }

  productForm = new FormGroup({
    ProductName : new FormControl(''),
    ProductDescription : new FormControl(''),
    ProductPrice : new FormControl('')
  })

  // gets called automatically
  ProductDetails() : void
  {
    this.productservice.ViewProductDetails().subscribe(res => {
      this.prodDetails = res;
    }, err => {
      console.log("Error while fetching data!!!");
    })
  }

  ngOnInit(): void 
  {
    this.ProductDetails();
  }

  // Function for adding to db
  addProduct() : void
  {
    this.productservice.AddProductDetails(this.productForm.value).subscribe(res => {
      console.log("Product Added!");
      this.ProductDetails();
    }, err => {
      console.log("Error while adding data!!!");
    })
  }

  // Function to deleting from db
  deleteProduct(id : number) : void
  {
    this.productservice.DeleteProductDetails(id).subscribe(res => {
      console.log("Deleted successfully");
      this.ProductDetails();
    }, err => {
      console.log("Error while deleting!!!");
    })
  }


  // Function for updating
  updateProduct(id : number) : void
  {
    this.productservice.UpdateProductDetails(id, this.productForm.value).subscribe(res => {
      console.log("Result Updated!");
      this.ProductDetails();
    }, err => {
      console.log("Error while updating");
    })
  }

  
  getIdforUpdate(id : number) : void
  {
    this.prodId = id;
  }

}
