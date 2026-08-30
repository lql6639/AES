const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../../config.js')

const { pkcs7_padded, pkcs7_unpadded } = require('./pkcs7.js')

/**
 * @description Cipher-Block Chaining (recommended)
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * content must be multiple of 16 bytes
 * @example
 * Cbc_Encryption (content)
 */

function Cbc_Encryption(content) {

  const padded = pkcs7_padded(content)

  const aesCbc = new aesjs.ModeOfOperation.cbc(aes.key, aes.iv)

  return Buffer.concat([aes.iv, Buffer.from(aesCbc.encrypt(padded))]).toString('base64')
}

/**
 * @description Cipher-Block Chaining (recommended)
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * Cbc_Decryption (encryptedHex)
 */

function Cbc_Decryption(encryptedHex) {

  const aesCbc = new aesjs.ModeOfOperation.cbc(aes.key, Buffer.from(encryptedHex, 'base64').subarray(0, 16))

  const encrypted = aesCbc.decrypt(Buffer.from(encryptedHex, 'base64').subarray(16))

  return pkcs7_unpadded(encrypted)
}

module.exports = { Cbc_Encryption, Cbc_Decryption }
