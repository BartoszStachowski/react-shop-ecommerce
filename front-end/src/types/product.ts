export interface ProductType {
    id: number;
    gender: 'men' | 'women' | 'children';
    category: string;
    subcategory: string;
    productName: string;
    brand: string;
    pricePLN: number;
    priceUSD: number;
    photos: string[];
    description: string;
    maintenanceInfo: string;
}
