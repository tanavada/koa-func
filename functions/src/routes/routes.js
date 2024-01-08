const Router = require('koa-router');

const hello = require('../handlers/helloWorld');
// Prefix all routes with /books
const router = new Router({
    prefix: '/api'
});

router.get('/hello', hello.HelloWorld);


module.exports = router;
