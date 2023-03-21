import '@/test/NextRouter.mock'
import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import React from 'react'

import Campaign from '.'

const campaign = {
  id: '1',
  name: 'Winter Holidays 10$',
  dateFrom: '2023-03-25',
  dateTo: '2023-05-25',
  amount: '10',
  currency: 'USD',
  vouchers: [{ code: 'TEST-VOUCHER' }],
  prefix: 'WINTER',
}

describe('<Campaign>', () => {
  const renderCampaign = () => render(<Campaign campaign={campaign} />)

  it('it should render campaign data', () => {
    renderCampaign()

    expect(screen.queryByText('Name: Winter Holidays 10$')).toBeInTheDocument()
    expect(screen.queryByText('Discount: 10 USD')).toBeInTheDocument()
    expect(
      screen.queryByText('Validity of Date: 2023-03-25 to 2023-05-25')
    ).toBeInTheDocument()
  })

  it('it should render vouchers related data and components', () => {
    renderCampaign()

    expect(screen.queryByText('Download vouchers')).toBeInTheDocument()

    //table content
    expect(screen.queryByText('1 Voucher(s) in Campaign')).toBeInTheDocument()
    expect(screen.queryByText('TEST-VOUCHER')).toBeInTheDocument()
  })
})
