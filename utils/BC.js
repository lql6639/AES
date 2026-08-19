const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../config.js')

/**
 * @description Block Cipher 加密密文.length -> 32
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * content must be 16 bytes, no more, no less
 * @example
 * AES_BC_Encryption (content)
 */

function AES_BC_Encryption (content) {

  const aesBc = new aesjs.AES(aes.key)

  return Buffer.from(aesBc.encrypt(aesjs.utils.utf8.toBytes(content))).toString('base64')
}

/**
 * @description Block Cipher
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * AES_BC_Decryption (encryptedHex)
 */

function AES_BC_Decryption (encryptedHex) {

  const aesBc = new aesjs.AES(aes.key)

  return aesjs.utils.utf8.fromBytes(aesBc.decrypt(Buffer.from(encryptedHex, 'base64')))
}

module.exports = { AES_BC_Encryption, AES_BC_Decryption }
