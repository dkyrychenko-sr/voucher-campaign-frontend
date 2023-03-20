import EllipsisVerticalIcon from '@heroicons/react/24/outline/EllipsisVerticalIcon'
import { useState } from 'react'

export default function CampaignDropdownMenu() {
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        data-dropdown-trigger="click"
      >
        <EllipsisVerticalIcon className="cursor-pointer h-6 w-6 text-gray-500" />
      </button>
      <div
        id="dropdown"
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li className="flex justify-center">
            <button className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Generate Vouchers
            </button>
          </li>
          <li className="flex justify-center">
            <button className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              Delete Campaign
            </button>
          </li>
        </ul>
      </div>
    </>
  )
}
