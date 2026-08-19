### 1、安装依赖

+ 1、安装 `aes-js` 库

```shell
pnpm install aes-js@3.1.2
```

+ 2、安装 `pkcs7` 库

```shell
pnpm install pkcs7@1.0.4
```

### 2、AES 加密 解密

+ 1、导入需要的 AES 加密类型模块

```javascript
const { AES_CBC_Encryption, AES_CBC_Decryption } = require('./utils/CBC.js')
```

+ 2、需要加密的数据

```javascript
const data = { code: 200, success: true, message: 'ok' }
```

+ 3、加密

```javascript
const encrypted = AES_CBC_Encryption(data)

console.log(encrypted)

// 86ndrKp2fkUykbMIqSL23zm/nZPs/41DJBO1mWY3IVZS1b5iNq40VcI09mQyVQo3w3K2QmZJHLpMaXga9RR3HQ==
```

+ 4、解密

```javascript
const decrypted = AES_CBC_Decryption(encrypted)

console.log(decrypted)

// { code: 200, success: true, message: 'ok' }
```
