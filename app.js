import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";

const app = express();

// 1. Configurar CORS
const corsOptions = {
  origin: "https://mern-crud-auth.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corsOptions));
// 2. Logging de solicitudes
app.use(morgan("dev"));

// 3. Parsear el cuerpo y las cookies de las solicitudes
app.use(express.json());
app.use(cookieParser());

// 4. Manejar rutas específicas
app.use(authRoutes);
app.use(taskRoutes);

export default app;

// const whitelist = [
//   "https://mern-crud-auth.vercel.app",
//   "http://localhost:5173",
// ];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
// };

// app.use(cors(corsOptions));

// app.use(
//   cors({
//     origin: whitelist,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   })
// );

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );
