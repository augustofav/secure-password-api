import "dotenv/config";
import express from "express";
import cors from "cors";
import passwordRoutes from "./routes/Password.routes";
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const PORT = process.env.PORT || 4000;
const server = express();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "SecurePassword",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/documentation/*swagger.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

server.use(express.json());
server.use(cors());
server.use(passwordRoutes);

server.get("/", (req, res) => {
  res.send("Bem-vindo!");
});

server.use((req, res) => {
  res.status(404);
});

server.listen(PORT, () => {
  console.log(`Conectado ${PORT}`);
});

export default server;
