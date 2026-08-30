const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../../config.js')

/**
 * @description Block Cipher 加密密文.length -> 32
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * content must be 16 bytes, no more, no less
 * @example
 * Bc_Encryption (content)
 */

function Bc_Encryption(content) {

  const aesBc = new aesjs.AES(aes.key)

  return Buffer.from(aesBc.encrypt(aesjs.utils.utf8.toBytes(content))).toString('base64')
}

/**
 * @description Block Cipher
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * Bc_Decryption (encryptedHex)
 */

function Bc_Decryption(encryptedHex) {

  const aesBc = new aesjs.AES(aes.key)

  return aesjs.utils.utf8.fromBytes(aesBc.decrypt(Buffer.from(encryptedHex, 'base64')))
}

module.exports = { Bc_Encryption, Bc_Decryption }
