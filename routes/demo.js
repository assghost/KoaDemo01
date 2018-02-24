const router = require('koa-router')()

router.prefix('/demo')

router.get('*', async (ctx, next) => {
  await ctx.render('demo', {
    title: 'React Counter'
  })
})


module.exports = router