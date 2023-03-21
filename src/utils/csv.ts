import { IVoucher } from '@/interfaces/voucher.interface'

export const prepareVouchersForCSVExport = (
  vouchers: IVoucher[]
): string[][] => {
  const csvData = [['Voucher']]

  vouchers.forEach((voucher: IVoucher) => {
    csvData.push([voucher.code])
  })

  return csvData
}
