const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../../config.js')

const { pkcs7_padded, pkcs7_unpadded } = require('./pkcs7.js')

/**
 * @description Cipher Feedback
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * @example
 * Cfb_Encryption (content)
 */

function Cfb_Encryption(content) {

  const padded = pkcs7_padded(content)

  const aesCfb = new aesjs.ModeOfOperation.cfb(aes.key, aes.iv, aes.Size)

  return Buffer.concat([aes.iv, Buffer.from(aesCfb.encrypt(padded))]).toString('base64')
}

/**
 * @description Cipher Feedback
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * Cfb_Decryption (encryptedHex)
 */

function Cfb_Decryption(encryptedHex) {

  const aesCfb = new aesjs.ModeOfOperation.cfb(aes.key, Buffer.from(encryptedHex, 'base64').subarray(0, 16), aes.Size)

  const encrypted = aesCfb.decrypt(Buffer.from(encryptedHex, 'base64').subarray(16))

  return pkcs7_unpadded(encrypted)
}

module.exports = { Cfb_Encryption, Cfb_Decryption }
