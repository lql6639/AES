const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../config.js')

const { pkcs7_padded, pkcs7_unpadded } = require('./pkcs7.js')

/**
 * @description Counter(recommended)
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * @example
 * AES_CTR_Encryption (content)
 */

function AES_CTR_Encryption (content) {

  const padded = pkcs7_padded(content)

  const aesCtr = new aesjs.ModeOfOperation.ctr(aes.key, new aesjs.Counter(aes.Counter))

  return Buffer.concat([aes.Counter, Buffer.from(aesCtr.encrypt(padded))]).toString('base64')
}

/**
 * @description Counter(recommended)
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * AES_CTR_Decryption (encryptedHex)
 */

function AES_CTR_Decryption (encryptedHex) {

  const aesCtr = new aesjs.ModeOfOperation.ctr(aes.key, new aesjs.Counter(aes.Counter))

  const encrypted = aesCtr.decrypt(Buffer.from(encryptedHex, 'base64').subarray(16))

  return pkcs7_unpadded(encrypted)
}

module.exports = { AES_CTR_Encryption, AES_CTR_Decryption }
