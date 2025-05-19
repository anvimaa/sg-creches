import React from 'react'

export function BirthdayCake(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v1" />
      <path d="M12 7a3 3 0 0 0-3 3v1h6V10a3 3 0 0 0-3-3Z" />
      <path d="M11 5.997V6a1 1 0 1 1 2 0v-.003" />
      <path d="M7 16a2 2 0 0 1-2-2v-2h14v2a2 2 0 0 1-2 2" />
      <path d="M5 14v8h14v-8" />
      <path d="M5 14a4 4 0 0 1-4-4v-1h4" />
      <path d="M19 14a4 4 0 0 0 4-4v-1h-4" />
    </svg>
  )
}