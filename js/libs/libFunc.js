const LibFun = async ({ wait, message }) => {
  if (wait) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(message)
      }, 1000)
    })
  } else {
    return message
  }
};
module.exports = LibFun;