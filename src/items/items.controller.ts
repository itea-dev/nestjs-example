import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item, Id } from './items.interface';
import { CreateItemDto } from './create-item.dto';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Array<Item> {
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() item: CreateItemDto): Id {
        return this.itemsService.create(item);
    }

}
