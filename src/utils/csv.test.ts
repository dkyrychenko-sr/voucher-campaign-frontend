import { prepareVouchersForCSVExport } from './csv'

describe('csv.utils', () => {
  it('should prepareVouchersForCSVExport and return array for csv', () => {
    const vouchers = [{ code: 'TEST' }, { code: 'TEST2' }]

    expect(prepareVouchersForCSVExport(vouchers)).toEqual([
      ['Voucher'],
      ['TEST'],
      ['TEST2'],
    ])
  })

  it('should prepareVouchersForCSVExport and return an empty array', () => {
    expect(prepareVouchersForCSVExport([])).toEqual([['Voucher']])
  })
})
