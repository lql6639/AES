// 导入需要的 AES 加密类型模块
const { AES_CBC_Encryption, AES_CBC_Decryption } = require('./utils/CBC.js')

// 需要加密的数据
const data = { code: 200, success: true, message: 'ok' }

// 加密
const encrypted = AES_CBC_Encryption(data)

console.log(encrypted)

// 解密
const decrypted = AES_CBC_Decryption(encrypted)

console.log(decrypted)
