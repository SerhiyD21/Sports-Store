# 🏋️ Sports Store API

## 🌐 Base URL
```
http://localhost:3000
```

## 📚 Available Endpoints

### 👤 Users

#### 👥 Get All Users
- **GET** `/api/users`
- **Response:**
[
    {
        "id": "64f1234567890abcd123456",
        "name": "Serhii",
        "email": "serhii@example.com",
        "role": "customer"
    },
    {
        "id": "64f1234567890abcd123457",
        "name": "Admin",
        "email": "admin@example.com",
        "role": "admin"
    }
]
#### 🔎 Get User by ID
- **GET** `/api/users/:id`
- **Response:**
{
    "id": "64f1234567890abcd123456",
    "name": "Serhii",
    "email": "serhii@example.com",
    "role": "customer"
}
#### ➕ Create User
- **POST** `/api/users`
- **Body:**
{
  "name": "Natalia",
  "email": "natalia@example.com",
  "password": "Aa123456",
  "role": "customer"
}
- **Response:**
{
    "message": "User created successfully",
    "user": {
        "id": "64f1234567890abcd123458",
        "name": "Natalia",
        "email": "natalia@example.com",
        "role": "customer"
    }
}
#### 🔑 Login User
- **POST** `/api/auth/login`
- **Body:**
{
  "email": "serhii@example.com",
  "password": "Aa123456"
}
- **Response:**
{
    "message": "Login successful",
    "token": "jwt-token-here"
}
### 🗂 Categories
#### 👥 Get All Categories
- **GET** `/api/categories`
- **Response:**
[
    {
        "id": "64f1234567890abcd123460",
        "name": "Fitness"
    },
    {
        "id": "64f1234567890abcd123461",
        "name": "Basketball"
    }
]
#### 🔎 Get Category by ID
- **GET** `/api/categories/:id`
- **Response:**
{
    "id": "64f1234567890abcd123460",
    "name": "Fitness"
}
#### ➕ Create Category (admin only)
- **POST** `/api/categories`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Body:**
{
  "name": "Fitness"
}
- **Response:**
{
    "message": "Category created successfully",
    "category": {
        "id": "64f1234567890abcd123460",
        "name": "Fitness"
    }
}
#### ✏️ Update Category (admin only)
- **PUT** `/api/categories/:id`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Body:**
{
  "name": "Gym"
}
- **Response:**
{
    "message": "Category updated successfully",
    "category": {
        "id": "64f1234567890abcd123460",
        "name": "Gym"
    }
}
#### 🗑 Delete Category (admin only)
- **DELETE** `/api/categories/:id`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Response:**
{
    "message": "Category deleted successfully"
}
### 🏷 Products
#### 👥 Get All Products
- **GET** `/api/products`
- **Response:**
[
    {
        "id": "64f1234567890abcd123470",
        "name": "Basketball",
        "description": "Standard basketball",
        "price": 799,
        "quantity": 10,
        "categoryId": "64f1234567890abcd123461"
    }
]
#### 🔎 Get Product by ID
- **GET** `/api/products/:id`
- **Response:**
{
    "id": "64f1234567890abcd123470",
    "name": "Basketball",
    "description": "Standard basketball",
    "price": 799,
    "quantity": 10,
    "categoryId": "64f1234567890abcd123461"
}
#### ➕ Create Product (admin/seller)
- **POST** `/api/products`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Body:**
{
    "name": "Basketball",
    "description": "Standard basketball",
    "price": 799,
    "quantity": 10,
    "categoryId": "64f1234567890abcd123461",
    "imageUrl": "https://example.com/basketball.jpg",
    "sellerId": "64f1234567890abcd123456"
}
- **Response:**
{
    "message": "Product created successfully",
    "product": {
        "id": "64f1234567890abcd123470",
        "name": "Basketball",
        "price": 799
    }
}
#### ✏️ Update Product (admin/seller)
- **PUT** `/api/products/:id`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Body:**
{
    "name": "Basketball PRO",
    "price": 899,
    "quantity": 15
}
- **Response:**
{
    "message": "Product updated successfully",
    "product": {
        "id": "64f1234567890abcd123470",
        "name": "Basketball PRO",
        "price": 899
    }
}
#### 🗑 Delete Product (admin/seller)
- **DELETE** `/api/products/:id`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Response:**
{
    "message": "Product deleted successfully"
}
### 🛒 Orders
#### ➕ Create Order (customer)
- **POST** `/api/orders`
- **Headers:** Authorization: Bearer {{token}}
- **Body:**
{
  "products": [
    { "productId": "64f1234567890abcd123470", "quantity": 2 }
  ],
  "totalAmount": 1598,
  "shippingAddress": "Kyiv, Lesi Ukrainky 10"
}
- **Response:**
{
    "message": "Order created successfully",
    "order": {
        "id": "64f1234567890abcd123480",
        "totalAmount": 1598
    }
}
#### 👥 Get All Orders
- **GET** `/api/orders`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Response:**
[
    {
        "id": "64f1234567890abcd123480",
        "totalAmount": 1598,
        "userId": "64f1234567890abcd123456",
        "status": "pending"
    }
]
#### ✏️ Update Order (admin)
- **PUT** `/api/orders/:id`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Body: { "status": "completed" }**
- **Response:**
{
    "message": "Order updated successfully",
    "order": {
        "id": "64f1234567890abcd123480",
        "status": "completed"
    }
}
#### 🗑 Delete Order (admin)
- **DELETE** `/api/orders/:id`
- **Headers:** Authorization: Bearer {{adminToken}}
- **Response:**
{
    "message": "Order deleted successfully"
}
### ⭐ Reviews
#### ➕ Create Review
- **POST** `/api/reviews`
- **Headers:** Authorization: Bearer {{token}}
- **Body: { "productId": "64f1234567890abcd123470", "rating": 5, "comment": "Excellent product!" }**
- **Response:**
{
    "message": "Review created successfully",
    "review": {
        "id": "64f1234567890abcd123490",
        "rating": 5,
        "comment": "Excellent product!"
    }
}
#### 👥 Get All Reviews
- **GET** `/api/reviews`
- **Response:**
[
    {
        "id": "64f1234567890abcd123490",
        "productId": "64f1234567890abcd123470",
        "rating": 5,
        "comment": "Excellent product!"
    }
]
#### ✏️ Update Review
- **PUT** `/api/reviews/:id`
- **Headers:** Authorization: Bearer {{token}}
- **Body: { "rating": 4, "comment": "Good, but could be better" }**
- **Response: { "message": "Review updated successfully", "review": { "id": "64f1234567890abcd123490", "rating": 4 } }
#### 🗑 Delete Review
- **DELETE** `/api/reviews/:id`
- **Headers:** Authorization: Bearer {{token}}
- **Response: { "message": "Review deleted successfully" }
## ❌ Error Responses
### Standard Error Format
{ "error": "Error type", "message": "Detailed error message" }
### Common HTTP Status Codes
- 200 - Success
- 201 - Created
- 400 - Bad Request
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Internal Server Error
