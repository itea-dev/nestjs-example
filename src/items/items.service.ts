import { Injectable } from '@nestjs/common';
import { Item, Id } from './items.interface';

@Injectable()
export class ItemsService {

    items: Array<Item> = [
        { name: "TV", description: "4K TV", price: 499 },
        { name: "Laptop", description: "Gaming laptop", price: 850 },
        { name: "Master Angular 16 week", description: "A guide on how to master Angular", price: 42 }
    ];

    constructor() { }

    create(item: import("./create-item.dto").CreateItemDto): Id {
        this.items.push(item);
        return { id: this.items.length.toString() }
    }

    findAll(): Array<Item> {
        return this.items;
    }

}
