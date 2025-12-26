import express, { Request, Response } from "express";
import logger from "./middleware/logger";
import initDB from "./config/db";
import { userRoutes } from "./modules/users/users.routes";
import { authRoutes } from "./modules/auth/auth.routes";

import { bookingRoutes } from "./modules/booking/booking.routes";

const app = express();

// parser (MiddleWare)
app.use(express.json())

app.get("/", logger, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running...",
   
  });
});
initDB();

app.use("/api/v1", userRoutes);
app.use("/api/v1", authRoutes);

app.use("/api/v1", bookingRoutes);

// not found error handle
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Routes Not Found",
    path: req.path,
  });
});


export default app;