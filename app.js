// 导入需要的 AES 加密类型模块
const { Cbc_Encryption, Cbc_Decryption } = require('./utils/aes/Cbc.js')

// 需要加密的数据
const data = { code: 200, success: true, message: 'ok' }

// 加密
const encrypted = Cbc_Encryption(data)

console.log(encrypted)

// 解密
const decrypted = Cbc_Decryption(encrypted)

console.log(decrypted)
