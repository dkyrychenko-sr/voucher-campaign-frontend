import { IVoucher } from '@/interfaces/voucher.interface'

export const prepareVouchersForCSVExport = (
  vouchers: IVoucher[]
): string[][] => {
  const csvData = [['id', 'Voucher']]

  vouchers.forEach((voucher: IVoucher) => {
    csvData.push([voucher.id, voucher.code])
  })

  return csvData
}
