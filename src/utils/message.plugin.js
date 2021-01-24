export default {
  install(Vue, options) {
    Vue.prototype.$message = (message) => {
      M.toast({html: message})
    }

    Vue.prototype.$error = (error) => {
      M.toast({html: `[Error]: ${error}`})
    }
  }
}
