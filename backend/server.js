import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import { connectDB } from "./config/db.js";
import path from "path";
import invoiceRouter from "./routes/invoiceRouter.js";
import businessProfileRouter from "./routes/businessProfileRouter.js";
import aiInvoiceRouter from "./routes/aiInvoiceRouter.js";


//DB
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

const _dirname =path.resolve();

//MIDDLEWAREs
app.use(
  cors({
    origin: "https://ai-invoice-generator-5tpt.onrender.com",
    credentials: true,
  })
);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true, limit: "20mb" }));
app.use(clerkMiddleware());

//ROUTES


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use("/api/invoice", invoiceRouter);
app.use("/api/businessProfile", businessProfileRouter);
app.use("/api/ai", aiInvoiceRouter);


app.use(express.static(path.join(_dirname, "/frontend/dist")));

app.get(/.*/, (_, res) => {
  res.sendFile(path.resolve(_dirname, "frontend", "dist", "index.html"));
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
