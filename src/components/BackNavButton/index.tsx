import { useCallback } from 'react'

export default function BackNavButton() {
  const goBack = useCallback(() => {
    window.history.back()
  }, [])

  return (
    <button
      className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-400 "
      onClick={goBack}
    >
      <svg
        aria-hidden="true"
        className="w-4 h-4 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
      </svg>
      Back
    </button>
  )
}
