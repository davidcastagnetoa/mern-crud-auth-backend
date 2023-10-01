# Node Task Management Backend

A Node.js backend application for managing tasks. Users can register, log in, log out, and perform CRUD operations on tasks.

## Architecture

- **Controllers**: Responsible for handling business logic and communicating with the database.
- **Middlewares**: Handle token validation and request data validation.
- **Endpoints**: Define the API routes users can access.
- **Yup Schemas**: Ensure incoming data meets defined criteria.

## Technologies Used

- Node.js
- Express
- MongoDB
- JWT for authentication
- Yup for data validation

## Installation & Setup

1. **Clone the Repository**

   ```bash
   git clone [repository_url]
   cd [repository_name]

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Set Up Environment Variables**

   - Create a `.env` file in the root directory of your project.
   - Define the required environment variables:

   ```bash
   MONGODB_URI=your_mongodb_connection_string
   TOKEN_SECRET=your_jwt_secret_key

   ```

4. **Running the Server**
   ```bash
   npm start
   ```

## API Endpoints

### User Routes

- `POST /api/register`: Register a new user.
- `POST /api/login`: Log in a user.
- `GET /api/logout`: Log out a user.
- `GET /api/profile`: Get the profile of the logged-in user.
- `GET /api/verify`: Verify a user's token.

### Task Routes

- `GET /api/tasks`: Get all tasks for the logged-in user.
- `POST /api/tasks`: Create a new task.
- `GET /api/tasks/:id`: Get a specific task.
- `DELETE /api/tasks/:id`: Delete a task.
- `PUT /api/tasks/:id`: Update a task.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

This application is based on the video tutorial created by **fazt**. All credits for the original content and tutorial go to him.

🎥 [Watch the tutorial on YouTube](https://youtu.be/NmkY4JgS21A)
