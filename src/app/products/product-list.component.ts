import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
@Component({
    selector: 'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
    private _productService;
    constructor(productService: ProductService){
        this._productService = productService;
    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product list:' + message;
        }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLowerCase().indexOf(filterBy) !== -1);
    }
    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
    pageTitle:string = "Product List";
    imageMargin: number = 2;
    showImage:boolean = false;
    
    filteredProducts: IProduct[];

    private _listFilter:string;
    public get listFilter() {
        return this._listFilter;
    }
    public set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter): this.products;

    }
    products:IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
          }
    ];
    imageWidth=40;

    toggleImage():void{
        this.showImage = !this.showImage;
    }
}


