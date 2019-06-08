import { Readable } from 'stream'

export interface AliyunHttpHeaderDefailt {
  'accept-encoding': string
  'keep-alive': string
  'proxy-authorization': string
  'transfer-encoding': string
  te: string
  trailer: string
  connection: string
}

export interface AliyunHttpHeader extends AliyunHttpHeaderDefailt {
  [key: string]: string
}

export interface AliyunHttpQuery {
  [key: string]: string | string[]
}

export interface AliyunHttpRequest {
  headers: AliyunHttpHeader
  path: string
  queries: AliyunHttpQuery
  method: string
  clientIP: string
  url: string
}

export type AliyunHttpBody = string | Buffer | Readable

export interface AliyunHttpResponse {
  setStatusCode: (code: number) => void
  setHeader: (key: string, value: string) => void
  deleteHeader: (key: string) => void
  send: (body: AliyunHttpBody) => void
}

export interface AliyunHttpCredentials {
  accessKeyId: string
  accessKeySecret: string
  securityToken: string
}

export interface AliyunHttpFunction {
  name: string
  handler: string
  memory: number
  timeout: number
  initializer: string
  initializationTimeout: number
}

export interface AliyunHttpService {
  name: string
  logProject: string
  logStore: string
  qualifier: string
  versionId: string
}

export interface AliyunHttpContext {
  requestId: string
  credentials: AliyunHttpCredentials
  'function': AliyunHttpFunction
  service: AliyunHttpService
  region: string
  accountId: string
}

export type AliyunHttpHandler = (
  req: AliyunHttpRequest,
  res: AliyunHttpResponse,
  context: AliyunHttpContext,
) => void


