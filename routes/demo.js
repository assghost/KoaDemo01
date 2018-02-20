const router = require('koa-router')()

router.prefix('/demo')

router.get('/', async (ctx, next) => {
  await ctx.render('demo', {
    title: 'Hello React!'
  })
})


module.exports = router