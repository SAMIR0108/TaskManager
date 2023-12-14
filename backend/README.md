# TaskManager

This Node.js server utilizes Express to create RESTful API endpoints for user authentication and task management. It implements JWT-based authentication and stores task data in a MySQL database. The following endpoints are available:

## Endpoints:

- **Login:** `POST /login` - User login authentication.
- **Register:** `POST /register` - User registration.
- **Update:** `PUT /tasks/:id` - Update a specific task.
- **Delete:** `DELETE /tasks/:id` - Delete a specific task.
- **Revoke:** `POST /revoke` - Revoke a user's authentication token.
- **View All:** `GET /tasks` - View all tasks.
- **View One:** `GET /tasks/:id` - View a specific task.

## Libraries Used:

- **Express:** Used to create the server and handle HTTP requests.
- **Joi:** For data validation of incoming requests.
- **Jsonwebtoken:** Implements JWT-based authentication.
- **Sequelize:** An ORM (Object-Relational Mapping) for interacting with the MySQL database.
- **Mysql2:** MySQL client for Node.js used with Sequelize for database interactions.

## Setting Up:

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Set up your MySQL database and configure the connection in the code.
4. Run the server using `node server.js` or `npm start`.

## Usage:

1. Use `/register` to create a new user.
2. Authenticate using `/login` to receive a JWT token.
3. Use the JWT token in the Authorization header for accessing protected routes (e.g., `/tasks`, `/tasks/:id`).
4. Access other endpoints as required based on the described functionality.

## Additional Notes:

- Ensure to handle error cases, input validation, and secure storage of sensitive data.
- Implement HTTPS for secure communication in production environments.
- Expand functionalities, error handling, and validation as per project requirements.
