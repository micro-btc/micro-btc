import {
  deepStrictEqual,
//  throws
} from 'assert'
import { should } from 'micro-should'
//import { hex } from '@scure/base'
import * as btc from '../index.js'

should('generate a random key pair', () => {
  const privateKey = btc.makePrivateKey()
  console.log(`Private key: ${privateKey}`)
  deepStrictEqual(privateKey.length, 32)

  const publicKey = btc.getPublicKey(privateKey)
  console.log(`Public key: ${publicKey}`)
  deepStrictEqual(publicKey.length, 33)

  //const publicKey3 = btc.getPublicKey(privateKey, 'ecdsa', false)
  //console.log(`Public key 3: ${publicKey3}`)
  //deepStrictEqual(publicKey.length, 65)
})
