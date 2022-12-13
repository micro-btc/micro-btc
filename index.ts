import * as secp from '@noble/secp256k1'
import { hex } from '@scure/base'
//import * as btc from 'micro-btc-signer'

export function makePrivateKey(): Uint8Array {
  return secp.utils.randomPrivateKey()
}

export function getPublicKey(
  privateKey: Uint8Array,
  type = 'ecdsa',
  isCompressed = true
): Uint8Array {
  console.log(`isCompressed: ${isCompressed}`)
  if (type === 'ecdsa') {
    return secp.getPublicKey(privateKey, isCompressed)
  } else if (type === 'schnorr') {
    return secp.schnorr.getPublicKey(privateKey)
  } else {
    throw new Error('Invalid public key type')
  }
}

export default {
  hex
}