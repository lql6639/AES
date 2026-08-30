const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../../config.js')

const { pkcs7_padded, pkcs7_unpadded } = require('./pkcs7.js')

/**
 * @description Output Feedback
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * @example
 * Ofb_Encryption (content)
 */

function Ofb_Encryption(content) {

  const padded = pkcs7_padded(content)

  const aesOfb = new aesjs.ModeOfOperation.ofb(aes.key, aes.iv)

  return Buffer.concat([aes.iv, Buffer.from(aesOfb.encrypt(padded))]).toString('base64')
}

/**
 * @description Output Feedback
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * Ofb_Decryption (encryptedHex)
 */

function Ofb_Decryption(encryptedHex) {

  const aesOfb = new aesjs.ModeOfOperation.ofb(aes.key, Buffer.from(encryptedHex, 'base64').subarray(0, 16))

  const encrypted = aesOfb.decrypt(Buffer.from(encryptedHex, 'base64').subarray(16))

  return pkcs7_unpadded(encrypted)
}

module.exports = { Ofb_Encryption, Ofb_Decryption }
