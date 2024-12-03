const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /*publicPath: process.env.NODE_ENV === "production" ? "/Portfolio/" : "/",*/
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",

})

module.exports = {
  transpileDependencies: true,
};

