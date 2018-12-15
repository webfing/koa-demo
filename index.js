const Koa = require('koa');
const app = new Koa();

app.use( async(ctx) => {
  ctx.body = 'hello world';
});

app.listen(8080);
console.log('koa run in 8080');
