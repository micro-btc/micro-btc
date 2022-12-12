import * as secp from '@noble/secp256k1'
import { hex } from '@scure/base'
import * as btc from 'micro-btc-signer'

export function createRandomPrivateKey(): Uint8Array {
  let privateKey: Uint8Array = secp.utils.randomPrivateKey()
  return privateKey
}

export function getPublicKey(
  privateKey: Uint8Array,
  type: string | undefined,
  isCompressed: boolean | undefined
): Uint8Array {
  if (type === 'ecdsa') {
    return secp.getPublicKey(privateKey, isCompressed)
  } else if (type === 'schnorr') {
    return secp.schnorr.getPublicKey(privateKey)
  } else if (type === undefined) {
    return secp.getPublicKey(privateKey, isCompressed)
  } else {
    throw new Error('Invalid public key type')
  }
}

export function toHex(bytes: Uint8Array): string {
  return hex.encode(bytes)
}

export function fromHex(hexString: string): Uint8Array {
  return hex.decode(hexString)
}