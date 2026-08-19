const crypto = require('crypto')

// All keys must be 128 bits(16 bytes), 192 bits(24 bytes) or 256 bits(32 bytes) long.

exports.aes = {
  // An use 256-bits key
  key: crypto.randomBytes(32),
  // The initialization vector (must be 16 bytes)
  iv: crypto.randomBytes(16),
  // The segment size is optional, and defaults to 1
  Size: 16,
  // The counter is optional, and if omitted will begin at 1
  Counter: crypto.randomBytes(16)
}
