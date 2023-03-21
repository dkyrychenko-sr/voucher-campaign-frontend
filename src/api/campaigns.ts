import { ICreateCampaign } from '@/interfaces'

import { Api } from './api'

export const getCampaigns = async () => {
  try {
    const response = await Api.get('campaigns')

    return response.data
  } catch (error) {
    console.error(error)

    return error
  }
}

export const getCampaignById = async (id: string) => {
  try {
    const response = await Api.get(`campaigns/${id}`)

    return response.data
  } catch (error) {
    console.error(error)

    return error
  }
}

export const createNewCampaign = async (body: ICreateCampaign) => {
  try {
    const response = await Api.post('campaigns', body)

    return response.data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export const deleteCampaignById = async (id: string) => {
  try {
    const response = await Api.delete(`campaigns/${id}`)
    return response.data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}

export const generateVouchers = async (
  id: string,
  amountOfNewVouchers: number
) => {
  try {
    const response = await Api.post(`campaigns/${id}/generate-vouchers`, {
      amountOfNewVouchers,
    })
    return response.data
  } catch (error) {
    throw new Error('Something went wrong')
  }
}
