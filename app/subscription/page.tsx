import { X } from "lucide-react"
import Link from "next/link"

export default function SubscriptionPage() {
  return (
    <div className="max-w-md mx-auto bg-black min-h-screen flex flex-col">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-white">
        <div className="text-lg font-semibold">10:30</div>
        <div className="flex items-center gap-2">
          <div className="h-5 w-5">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 18V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V18"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21V19ZM3 19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H6C6.53043 21 7.03914 20.7893 7.41421 20.4142C7.78929 20.0391 8 19.5304 8 19V16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14H3V19Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-1 bg-gray-300 rounded-t-sm"></div>
            <div className="h-4 w-1 bg-gray-300 rounded-t-sm"></div>
            <div className="h-5 w-1 bg-gray-300 rounded-t-sm"></div>
            <div className="h-6 w-1 bg-gray-300 rounded-t-sm"></div>
          </div>
          <div className="flex items-center">
            <div className="h-5 w-8 bg-green-500 rounded-full flex items-center justify-end pr-1">
              <div className="h-3 w-3 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-white text-center text-3xl font-bold mb-8">Understand your supplements</div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-col mr-2">
            <div className="h-8 w-16 bg-green-400 rounded-full"></div>
            <div className="h-8 w-16 bg-blue-400 rounded-full -mt-2"></div>
          </div>
        </div>
      </div>

      {/* Subscription Modal */}
      <div className="bg-black/80 p-4 rounded-t-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-2xl font-bold">Sandbox</h2>
          <Link href="/">
            <button className="bg-gray-700 p-2 rounded-full">
              <X className="h-5 w-5 text-white" />
            </button>
          </Link>
        </div>

        <div className="bg-gray-900 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <div className="bg-white p-3 rounded-xl mr-4">
              <div className="flex flex-col">
                <div className="h-4 w-8 bg-green-400 rounded-full"></div>
                <div className="h-4 w-8 bg-blue-400 rounded-full -mt-1"></div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Yearly 49.99</h3>
              <p className="text-gray-400">
                Prove It - Supplement Reviews{" "}
                <span className="bg-gray-700 text-white text-xs px-1 py-0.5 rounded">4+</span>
              </p>
              <p className="text-gray-400">Subscription</p>
            </div>
          </div>

          <div className="text-white text-2xl font-bold mb-4">$49.99 per year</div>

          <p className="text-gray-300 mb-6">
            For testing purposes only. You will not be charged for confirming this purchase.
          </p>

          <div className="text-gray-400 mb-8">Account: alex@proveit.com</div>

          <button className="bg-blue-500 text-white w-full py-4 rounded-full font-bold mb-6">Subscribe</button>

          <div className="h-1 w-1/3 bg-gray-700 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  )
}

