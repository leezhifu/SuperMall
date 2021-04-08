module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 配置路径的别名，方面后面的简写
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views':'@/views'
      }

    },
  }
}