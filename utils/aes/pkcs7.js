const pkcs7 = require('pkcs7')

/**
 * @description pkcs7 填充：把长度补到 16 的整数倍
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} content 内容
 * @example
 * pkcs7_padded (content)
 */

function pkcs7_padded (content) {
  // 返回 Uint8Array
  return pkcs7.pad(Buffer.from(JSON.stringify(content), 'utf8'))
}

/**
 * @description pkcs7 去掉填充：还原明文
 * @author koizora <1740242084@qq.com>
 * @license Apache-2.0
 * @param {string} encrypted 填充
 * @example
 * pkcs7_unpadded (encrypted)
 */

function pkcs7_unpadded (encrypted) {
  // 返回 Uint8Array 不能直接 toString，要先转 Buffer
  return JSON.parse(Buffer.from(pkcs7.unpad(encrypted)).toString('utf8'))
}

module.exports = { pkcs7_padded, pkcs7_unpadded }
