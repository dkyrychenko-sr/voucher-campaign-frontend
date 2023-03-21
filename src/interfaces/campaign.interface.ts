import { IVoucher } from './voucher.interface'

export interface ICampaign {
  id: string
  name: string
  dateFrom: string
  dateTo: string
  amount: string
  prefix: string
  currency: string
  vouchers: IVoucher[]
  hasVouchers?: string
  dateFromTo?: string
  discount?: string
}
