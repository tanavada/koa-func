const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const functions = require('firebase-functions');
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.post('/user', async (ctx) => {

    // Xử lý dữ liệu từ request body, ở đây chúng ta chỉ log thông tin nhận được
    console.log(ctx)

    // Trả về phản hồi cho client
    ctx.body = { message: 'User created successfully' };
});

router.get('/get', async (ctx) => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());
app.use(router.allowedMethods());

exports.koaApp = functions.https.onRequest(app.callback());