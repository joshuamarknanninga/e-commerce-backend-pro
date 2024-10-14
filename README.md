# E-commerce Backend Pro

This project is an e-commerce backend application that provides essential functionalities for managing product listings, categories, and tags. It allows users to create, read, update, and delete (CRUD) operations for product-related data using a RESTful API. The backend is built with Node.js, Express.js, Sequelize ORM, and PostgreSQL, following the MVC architecture.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [License](#license)

## Features

- Product management: Create, view, update, and delete products.
- Category management: Organize products into categories.
- Tag management: Assign tags to products for easy searching.
- Full CRUD API for products, categories, and tags.
- Relational database design using Sequelize ORM and PostgreSQL.
- Secure authentication using JWT and session cookies.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Sequelize ORM**: Object-Relational Mapper for SQL-based databases.
- **PostgreSQL**: SQL-based database management system.
- **dotenv**: Load environment variables from `.env` files.
- **Express-Session**: Middleware for managing sessions in Express.js.
- **JWT**: JSON Web Tokens for secure user authentication.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/joshuamarknanninga/e-commerce-backend-pro.git
Navigate to the project directory:

bash
Copy code
cd e-commerce-backend-pro
Install the required dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env file in the root of the project and add the following:

env
Copy code
DB_NAME=ecommerce_db
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
SECRET_KEY=your_jwt_secret
Set up the database:

bash
Copy code
npx sequelize-cli db:create
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
Usage
Start the server:

bash
Copy code
npm start
The server will run on http://localhost:3000. Use an API testing tool like Postman or Insomnia to interact with the endpoints.

The following resources are available:

## Products
- Categories
- Tags

## Authentication
JWT is used for secure authentication. You will need to log in with valid credentials to access protected routes.

## API Endpoints

| HTTP Method | Endpoint                  | Description                  |
|-------------|---------------------------|------------------------------|
| GET         | `/api/products`            | Get all products              |
| GET         | `/api/products/:id`        | Get a single product by ID    |
| POST        | `/api/products`            | Create a new product          |
| PUT         | `/api/products/:id`        | Update a product by ID        |
| DELETE      | `/api/products/:id`        | Delete a product by ID        |
| GET         | `/api/categories`          | Get all categories            |
| GET         | `/api/categories/:id`      | Get a category by ID          |
| POST        | `/api/categories`          | Create a new category         |
| PUT         | `/api/categories/:id`      | Update a category by ID       |
| DELETE      | `/api/categories/:id`      | Delete a category by ID       |
| GET         | `/api/tags`                | Get all tags                  |
| GET         | `/api/tags/:id`            | Get a tag by ID               |
| POST        | `/api/tags`                | Create a new tag              |
| PUT         | `/api/tags/:id`            | Update a tag by ID            |
| DELETE      | `/api/tags/:id`            | Delete a tag by ID            |

### Example JSON Request Body for Creating a Product

```json
{
  "product_name": "Sample Product",
  "price": 19.99,
  "stock": 50,
  "category_id": 1,
  "tagIds": [1, 2]
}

## Database Schema

The database schema consists of the following tables:

- **Products**: Stores product information such as name, price, and stock.
- **Categories**: Organizes products into different categories.
- **Tags**: Tags for products for better classification.
- **ProductTags**: Handles the many-to-many relationship between products and tags.

### Product Table Schema

| Field         | Data Type   | Description           |
|---------------|-------------|-----------------------|
| id            | INTEGER     | Primary key           |
| product_name  | STRING      | Name of the product   |
| price         | DECIMAL     | Price of the product  |
| stock         | INTEGER     | Available stock       |
| category_id   | INTEGER     | Foreign key for categories |

### Category Table Schema

| Field         | Data Type   | Description           |
|---------------|-------------|-----------------------|
| id            | INTEGER     | Primary key           |
| category_name | STRING      | Name of the category  |

### Tag Table Schema

| Field         | Data Type   | Description           |
|---------------|-------------|-----------------------|
| id            | INTEGER     | Primary key           |
| tag_name      | STRING      | Name of the tag       |

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
