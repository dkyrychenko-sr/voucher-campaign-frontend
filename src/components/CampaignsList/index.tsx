import { ICampaign } from '@/interfaces'
import {
  getCellForCampaignTable,
  processDataForCampaignsTable,
} from '@/utils/table'
import { useState } from 'react'
import TableComponent from '../Table'
import { columns } from './columns'
import { data } from './mockData'

export default function CampaignsList() {
  const [tableData, setTableData] = useState<ICampaign[]>(
    processDataForCampaignsTable(data)
  )
  return (
    <div className="p-8">
      <div className="flex justify-between mb-5">
        <h2 className="text-2xl font-extrabold">Campaigns List</h2>
        <a
          href="campaigns/create"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Create a new Campaign
        </a>
      </div>
      <TableComponent columns={columns}>
        {tableData.map((item: any) => (
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {columns.map((column) => (
              <td className="px-6 py-4">
                {getCellForCampaignTable(column.id, item[column.id])}
              </td>
            ))}
          </tr>
        ))}
      </TableComponent>
    </div>
  )
}
