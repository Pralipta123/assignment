import { Component } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  allProducts: Product[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      category: 'Electronics',
      price: 499,
      image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/mouse/ms355/media-gallery/mouse-dell-ms355-bk-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=367&qlt=100,1&resMode=sharp2&size=367,320&chrss=full'
    },
    {
      id: 2,
      name: 'Bluetooth Headphones',
      category: 'Electronics',
      price: 999,
      image: 'https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/original/1xPX-BPJqy-sony-tws-wf-c700n-bluee-493841805-i-1-1200wx1200h.jpeg'
    },
    {
      id: 3,
      name: 'Cotton T-shirt',
      category: 'Clothing',
      price: 299,
      image: 'https://yourdesignstore.s3.amazonaws.com/uploads/yds/productImages/thumb/1677835469508816639907562718organic-tee_website-final-1.png'
    },
    {
      id: 4,
      name: 'Sneakers',
      category: 'Footwear',
      price: 1199,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Coffee Mug',
      category: 'Home',
      price: 199,
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Keyboard',
      category: 'Electronics',
      price: 799,
      image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 7,
      name: 'Denim Jeans',
      category: 'Clothing',
      price: 899,
      image: 'https://assets.ajio.com/medias/sys_master/root/20240801/T52A/66abb7906f60443f31e1e335/-473Wx593H-442031523-denimblue-MODEL5.jpg'
    },
    {
      id: 8,
      name: 'Backpack',
      category: 'Accessories',
      price: 1099,
      image: 'https://uppercase.co.in/cdn/shop/files/1_88209a6c-c592-4179-b3a4-bc00e78e2131.png?v=1738227659'
    },
    {
      id: 9,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 2499,
      image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8681627e/images/Fastrack/Catalog/38158WM01_1.jpg?sw=800&sh=800'
    },
    {
      id: 10,
      name: 'Water Bottle',
      category: 'Home',
      price: 149,
      image: 'https://img.freepik.com/free-photo/transparent-water-bottle-outdoors_23-2151049141.jpg?semt=ais_hybrid&w=740'
    },
    {
      id: 11,
      name: 'Leather Wallet',
      category: 'Accessories',
      price: 899,
      image: 'https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390'
    },
    {
      id: 12,
      name: 'Stylish Sunglasses',
      category: 'Fashion',
      price: 1499,
      image: 'https://5.imimg.com/data5/WN/HD/MY-34697231/stylish-sunglasses.jpeg'
    }
  ];
  

  searchTerm = '';
  currentPage = 1;
  itemsPerPage = 4;

  get suggestions(): string[] {
    const term = this.searchTerm.toLowerCase();
    if (!term) return [];

    const exactMatch = this.allProducts.some(p => p.name.toLowerCase() === term);
    if (exactMatch) return [];

    return this.allProducts
      .map(p => p.name)
      .filter(name => name.toLowerCase().includes(term))
      .slice(0, 5);
  }

  get filteredProducts(): Product[] {
    const term = this.searchTerm.toLowerCase();
    return this.allProducts.filter(p =>
      p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term)
    );
  }

  get paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number[] {
    const count = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    return Array.from({ length: count }, (_, i) => i + 1);
  }

  selectSuggestion(name: string): void {
    this.searchTerm = name;
    this.currentPage = 1;
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
  
}
