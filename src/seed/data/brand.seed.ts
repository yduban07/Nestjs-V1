import { v4 as uuid } from "uuid";
import { Brand } from "src/brands/entities/brand.entity";

export const BRANDS_SEED: Brand[] = [


    {
        id: uuid(),
        name: 'Toyota',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Nissan',
        createdAt: new Date().getTime(),
    },
    {
        id: uuid(),
        name: 'Jeep',
        createdAt: new Date().getTime(),
    },


]