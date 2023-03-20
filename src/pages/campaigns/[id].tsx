import Campaign from '@/components/Campaign'
import { ICampaign } from '@/interfaces/campaign.interface'

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: { campaign },
  }
}

const campaign: ICampaign = {
  id: '1',
  name: 'Winter Holidays 10$',
  dateFrom: '2023-03-25',
  dateTo: '2023-05-25',
  amount: '10',
  currency: '$',
  vouchers: [
    {
      id: '1',
      code: 'RECHARGE-GVBSHF',
    },
  ],
  discount: '10$',
}

export default function CampaignPage() {
  return <Campaign campaign={campaign} />
}
