import {config} from "dotenv";
config();
import fastify from "fastify";

const app = fastify();

console.log("server port is running")

app.listen({port : parseInt(process.env.PORT!)});