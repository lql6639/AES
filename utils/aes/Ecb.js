const aesjs = require('aes-js')

// 导入配置文件
const { aes } = require('../../config.js')

const { pkcs7_padded, pkcs7_unpadded } = require('./pkcs7.js')

/**
 * @description Electronic Codebook (NOT recommended)
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 加密内容
 * content must be multiple of 16 bytes
 * @example
 * Ecb_Encryption (content)
 */

function Ecb_Encryption(content) {

  const padded = pkcs7_padded(content)

  const aesEcb = new aesjs.ModeOfOperation.ecb(aes.key)

  return Buffer.from(aesEcb.encrypt(padded)).toString('base64')
}

/**
 * @description Electronic Codebook (NOT recommended)
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encryptedHex 加密后的密文
 * @example
 * Ecb_Decryption (encryptedHex)
 */

function Ecb_Decryption(encryptedHex) {

  const aesEcb = new aesjs.ModeOfOperation.ecb(aes.key)

  const encrypted = aesEcb.decrypt(Buffer.from(encryptedHex, 'base64'))

  return pkcs7_unpadded(encrypted)
}

module.exports = { Ecb_Encryption, Ecb_Decryption }
