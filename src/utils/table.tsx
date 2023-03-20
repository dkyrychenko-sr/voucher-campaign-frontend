import DropdownMenu from '@/components/CampaignsList/CampaignDropdownMenu'
import { IColumnFields } from '@/components/Table'
import { ICampaign } from '@/interfaces'

export const processCampaignItemData = (item: ICampaign) => ({
  ...item,
  dateFromTo: `${item.dateFrom} to ${item.dateTo}`,
  discount: `${item.amount}${item.currency}`,
  hasVouchers: item.vouchers.length > 0 ? 'Yes' : 'No',
})

export const processDataForCampaignsTable = (data: ICampaign[]) => {
  return data.map((item) => processCampaignItemData(item))
}

export const getCellForCampaignTable = (columnId: string, value: string) => {
  if (columnId === 'actions') return <DropdownMenu />
  else if (columnId === 'id')
    return (
      <a className="text-white underline" href={`/campaigns/${value}`}>
        {value}
      </a>
    )
  else return value
}

export const getRowForVouchersTable = (
  columns: IColumnFields[],
  item: {
    [key: string]: string
  }
) => {
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
      key={item.id}
    >
      {columns.map((column) => (
        <td className="px-6 py-4" key={item[column.id]}>
          {item[column.id]}
        </td>
      ))}
    </tr>
  )
}
