To start the server, run the following commands in the terminal from inside the back-end folder:

```command
npm i
npm run dev
```
### Data model
```json
{
    "id": 1,
    "gender": "men",
    "category": "odziez",
    "subcategory": "koszulki",
    "productName": "T-Shirt",
    "brand": "Top Brand",
    "pricePLN": 49,
    "priceUSD": 10,
    "photos": [
        "http://localhost:3000/product-photos/man-t-shirt-1.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-4.jpg",
        "http://localhost:3000/product-photos/man-t-shirt-3.jpg"
    ],
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
    "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
}
```

### Endpoint description
| Path                  | Method | Description                                                                                               |
| --------------------- | ------ | --------------------------------------------------------------------------------------------------------- |
| /products             | `GET`  | Returns all products                                                                                      |
| /women/bestsellers    | `GET`  | Returns bestsellers from the "Women" category                                                             |
| /men/bestsellers      | `GET`  | Returns bestsellers from the "Men" category                                                               |
| /children/bestsellers | `GET`  | Returns bestsellers from the "Children" category                                                          |
| /products             | `GET`  | Returns all products                                                                                      |
| /favourites           | `GET`  | Returns all products added to the favourites list                                                         |
| /favourites           | `POST` | Adds a product to the favourites list. Requires a request body with the product ID, e.g. `{productId: 1}` |
