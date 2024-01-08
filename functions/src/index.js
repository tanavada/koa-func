const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const functions = require("firebase-functions");
const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();

router.post("/user", async (ctx) => {

  console.log(ctx);

  ctx.body = {message: "User created successfully"};
});

router.get("/get", async (ctx) => {
  ctx.body = "Hello World!";
});

app.use(router.routes());
app.use(router.allowedMethods());

exports.koaApp = functions.https.onRequest(app.callback());
