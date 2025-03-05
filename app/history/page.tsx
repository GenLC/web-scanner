import { ArrowLeft, Clock } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  return (
    <div className="w-full mx-auto bg-[#f0f9f5] min-h-screen flex flex-col md:max-w-4xl lg:max-w-6xl">

      <div className="w-full max-w-md mx-auto md:max-w-full">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-2 text-black">
        <div className="text-lg font-semibold">3:58</div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 9L12 15L6 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-1 bg-gray-300 rounded-t-sm"></div>
            <div className="h-4 w-1 bg-gray-300 rounded-t-sm"></div>
            <div className="h-5 w-1 bg-gray-300 rounded-t-sm"></div>
            <div className="h-6 w-1 bg-gray-300 rounded-t-sm"></div>
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

      {/* Header */}
      <div className="flex items-center px-6 pt-4 pb-2">
        <Link href="/">
          <ArrowLeft className="h-6 w-6 mr-4" />
        </Link>
        <h1 className="text-2xl font-bold">History</h1>
      </div>

      {/* Empty History State */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-100 p-6 rounded-full mb-4">
          <Clock className="h-12 w-12 text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold text-center mb-2">No History Yet</h2>
        <p className="text-gray-500 text-center">
          Your scanned products will appear here. Start by scanning a product with the camera.
        </p>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto md:max-w-4xl lg:max-w-6xl bg-white pt-4 pb-8 px-6 flex justify-between items-center border-t border-gray-100">
        <Link href="/" className="flex flex-col items-center text-gray-400">
          <div className="h-6 w-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-sm font-medium mt-1">Explore</span>
        </Link>
        <Link href="/camera" className="bg-green-600 p-4 rounded-full -mt-8 shadow-lg">
          <div className="h-6 w-6 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
                stroke="white"
                fill="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
                stroke="white"
                fill="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
        <div className="flex flex-col items-center text-green-500">
          <Clock className="h-6 w-6" />
          <span className="text-sm font-medium mt-1">History</span>
        </div>
      </div>
    </div>
  )
    </div>
  )
}

