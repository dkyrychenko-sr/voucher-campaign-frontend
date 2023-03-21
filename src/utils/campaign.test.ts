import { processFormValuesForRequest } from './campaign'

describe('campaign.utils', () => {
  it('should process processFormValuesForRequest and return a new object', () => {
    const formValues = {
      name: 'test',
      prefix: 'TEST',
      amount: 20,
      validityDate: {
        startDate: '2022-12-20',
        endDate: '2023-12-20',
      },
    }

    expect(processFormValuesForRequest(formValues)).toEqual({
      name: 'test',
      prefix: 'TEST',
      amount: 20,
      currency: 'USD',
      dateFrom: '2022-12-20',
      dateTo: '2023-12-20',
    })
  })
})
