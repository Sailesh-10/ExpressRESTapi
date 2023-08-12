# REST API User Controller

This repository contains the implementation of a REST API User Controller, built using the Express.js framework. The controller facilitates CRUD (Create, Read, Update, Delete) operations for managing user data.

## Installation

1. Clone this repository to your local machine.

```bash
git clone https://github.com/Sailesh-10/ExpressRESTapi.git
```

2. Navigate to the project directory.

```bash
cd ExpressRESTapi
```

3. Install the required dependencies using npm or yarn.

```bash
npm install
```

or

```bash
yarn install
```

## Usage

To use the User Controller, make sure you have an instance of an Express.js server set up, and you have already defined the necessary routes to handle incoming requests. The User Controller provides the following endpoints:

### `GET /users`

Retrieve a list of all users.

```javascript
GET / users;
```

Response:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
  // ...
]
```

### `GET /users/:id`

Retrieve a user by their ID.

```javascript
GET /users/:id
```

Response:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### `POST /users`

Create a new user.

```javascript
POST /users

Request Body:
{
  "name": "New User",
  "email": "newuser@example.com"
}
```

Response:

```json
{
  "id": 3,
  "name": "New User",
  "email": "newuser@example.com"
}
```

### `PUT /users/:id`

Update user information by their ID.

```javascript
PUT /users/:id

Request Body:
{
  "name": "Updated User",
  "email": "updated@example.com"
}
```

Response:

```json
{
  "id": 3,
  "name": "Updated User",
  "email": "updated@example.com"
}
```

### `DELETE /users/:id`

Delete a user by their ID.

```javascript
DELETE /users/:id
```

Response: HTTP status code 204 (No Content)

## Controller Methods

- `getAllUsers(req: Request, res: Response)`: Retrieve a list of all users.
- `getUserById(req: Request, res: Response)`: Retrieve a user by their ID.
- `createUser(req: Request, res: Response)`: Create a new user.
- `updateUser(req: Request, res: Response)`: Update user information by their ID.
- `deleteUser(req: Request, res: Response)`: Delete a user by their ID.

## Logging

For debugging purposes, logging has been added to the controller methods. You can find the log statements in the code marked with comments. By default, these logs will appear in your console, helping you monitor the flow of requests and responses.

## Error Handling

In case of internal server errors or other exceptional situations, appropriate error messages and status codes are returned to the client. Error responses follow a consistent format:

```json
{
  "error": "Error message"
}
```

## Contributions

Contributions to this repository are welcome. If you find any issues or have suggestions for improvements, feel free to create a pull request or an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
