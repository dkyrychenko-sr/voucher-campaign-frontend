/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios'

export class BaseApi {
  apiUrl = process.env.apiUrl

  public get(url: string): Promise<AxiosResponse<any>> {
    return axios.get(`${this.apiUrl}/${url}`).catch((error) => error)
  }

  public post(
    url: string,
    body: { [key: string]: any }
  ): Promise<AxiosResponse<any>> {
    return axios.post(`${this.apiUrl}/${url}`, body)
  }

  public delete(url: string): Promise<AxiosResponse<any>> {
    return axios.delete(`${this.apiUrl}/${url}`)
  }
}

export const Api = new BaseApi()
/* eslint-enable @typescript-eslint/no-explicit-any */
