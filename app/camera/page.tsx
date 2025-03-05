"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowLeft, Star, MoreVertical, ImageIcon, Sun } from "lucide-react"
import Link from "next/link"

export default function CameraPage() {
  const [mode, setMode] = useState<"photo" | "barcode">("photo")
  const [flashOn, setFlashOn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasPermission, setHasPermission] = useState<boolean | null>(null)

  useEffect(() => {
    // In a real app, this would request camera permission
    // For demo purposes, we'll just simulate it
    setHasPermission(true)
  }, [])

  const toggleFlash = () => {
    setFlashOn(!flashOn)
  }

  if (hasPermission === null) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Requesting camera permission...
      </div>
    )
  }

  if (hasPermission === false) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        Camera permission denied. Please enable camera access to use this feature.
      </div>
    )
  }

  return (
    <div className="relative h-screen bg-black w-full mx-auto md:max-w-4xl lg:max-w-6xl">
      <div className="w-full max-w-md mx-auto md:max-w-full">
       

      {/* Camera View */}
      <div className="relative h-[calc(100vh-180px)] overflow-hidden">
        {/* Simulated camera view with a placeholder image */}
        <div className="absolute inset-0 bg-gray-800">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/placeholder.svg?height=800&width=400"
              alt="Camera view"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>

        {/* Camera UI Controls */}
        <div className="absolute top-4 left-4">
          <Link href="/">
            <button className="p-2 rounded-full bg-black/30 text-white">
              <ArrowLeft className="h-6 w-6" />
            </button>
          </Link>
        </div>

        <div className="absolute top-4 right-4 flex space-x-4">
          <button className="p-2 rounded-full bg-black/30 text-white">
            <Star className="h-6 w-6" />
          </button>
          <button className="p-2 rounded-full bg-black/30 text-white">
            <MoreVertical className="h-6 w-6" />
          </button>
        </div>

        {/* Scanning Frame */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[80%] h-[60%] rounded-3xl border-2 border-white/70 overflow-hidden">
            {/* White dot at the bottom of the frame */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Camera Controls */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center space-x-4">
        <button className="p-4 rounded-full bg-white">
          <ImageIcon className="h-6 w-6 text-gray-700" />
        </button>

        <div className="flex bg-white rounded-full overflow-hidden">
          <button
            className={`px-6 py-3 ${mode === "photo" ? "bg-green-600 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setMode("photo")}
          >
            Photo
          </button>
          <button
            className={`px-6 py-3 ${mode === "barcode" ? "bg-green-600 text-white" : "bg-white text-gray-700"}`}
            onClick={() => setMode("barcode")}
          >
            Barcode
          </button>
        </div>

        <button className={`p-4 rounded-full ${flashOn ? "bg-green-600" : "bg-white"}`} onClick={toggleFlash}>
          <Sun className={`h-6 w-6 ${flashOn ? "text-white" : "text-gray-700"}`} />
        </button>
      </div>

      {/* Play Button Overlay */}
      <div className="absolute bottom-[70px] left-1/2 transform -translate-x-1/2">
        <div className="w-14 h-14 rounded-full bg-black/50 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
        </div>
      </div>
 
    </div>
  )
    </div>
  )
}

