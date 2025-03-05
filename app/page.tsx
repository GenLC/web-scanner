"use client"

import Image from "next/image"
import { Search, User, Lock, Camera, Clock, Sparkles, Filter, SortDesc } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [showFilters, setShowFilters] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  return (
    <div className="w-full mx-auto bg-[#f0f9f5] min-h-screen flex flex-col md:max-w-4xl lg:max-w-6xl">
      <div className="w-full max-w-md mx-auto md:max-w-full">
      {/* Status Bar */}
      {/*  
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
      */}
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-4 pb-2">
        <div className="flex items-center">
          <div className="flex flex-col mr-2">
            <div className="h-4 w-8 bg-green-400 rounded-full"></div>
            <div className="h-4 w-8 bg-blue-400 rounded-full -mt-1"></div>
          </div>
          <h1 className="text-3xl font-bold text-black">Prove It</h1>
        </div>
        <div className="bg-white p-3 rounded-full shadow-md">
          <User className="h-5 w-5 text-black" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-6 py-3 space-y-3">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-yellow-300 to-orange-400 p-[1.5px]">
            <div className="h-full w-full bg-white rounded-full"></div>
          </div>
          <div className="relative flex items-center bg-white rounded-full px-4 py-3 border border-transparent">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-gray-500 w-full"
            />
          </div>
        </div>

        {/* Filter and Order Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowFilters(!showFilters)
              setShowOrder(false)
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 shadow-sm hover:shadow transition-all">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
          </button>
          <button
            onClick={() => {
              setShowOrder(!showOrder)
              setShowFilters(false)
            }}
            className="flex-1 flex items-center justify-center gap-2 bg-white rounded-full py-2 px-4 shadow-sm hover:shadow transition-all">
            <SortDesc className="h-4 w-4" />
            <span>Order</span>
          </button>
        </div>

        {/* Filter Options */}
        {showFilters && (
          <div className="bg-white rounded-xl p-4 shadow-lg space-y-3 animate-in slide-in-from-top duration-300">
            <div className="font-medium">Filter by:</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Supplements</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Energy Drinks</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span>Natural Products</span>
              </label>
            </div>
          </div>
        )}

        {/* Order Options */}
        {showOrder && (
          <div className="bg-white rounded-xl p-4 shadow-lg space-y-3 animate-in slide-in-from-top duration-300">
            <div className="font-medium">Order by:</div>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="order" />
                <span>Name (A-Z)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="order" />
                <span>Name (Z-A)</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="order" />
                <span>Brand</span>
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Explore Section */}
      <div className="px-6 py-2">
        <h2 className="text-4xl font-bold text-black">Explore</h2>
      </div>

      {/* Product Cards */}
      <div className="px-6 py-2 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 flex-1">
        {/* Alpha BRAIN */}
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center">
          <div className="w-24 h-24 flex-shrink-0 relative">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Alpha BRAIN"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-bold text-black">Alpha BRAIN</h3>
            <p className="text-gray-600">Onnit</p>
            <p className="text-gray-500">30 capsules</p>
          </div>
          <div className="ml-auto">
            <div className="bg-gray-200 p-2 rounded-full">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* RESCUE PASTILLES */}
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center">
          <div className="w-24 h-24 flex-shrink-0 relative">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="RESCUE PASTILLES"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-bold text-black">RESCUE® PASTILLES</h3>
            <h4 className="text-lg text-black">Orange & Elderflower Fl...</h4>
            <p className="text-gray-600">Bach®</p>
            <p className="text-gray-500">50g e pastilles</p>
          </div>
          <div className="ml-auto">
            <div className="bg-gray-200 p-2 rounded-full">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Red Bull Sugarfree */}
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center">
          <div className="w-24 h-24 flex-shrink-0 relative">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="Red Bull Sugarfree"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-bold text-black">Red Bull Sugarfree</h3>
            <p className="text-gray-600">Red Bull</p>
            <p className="text-gray-500">8.4 fl oz; 250 ml</p>
          </div>
          <div className="ml-auto">
            <div className="bg-gray-200 p-2 rounded-full">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* ProtoClear */}
        <div className="bg-white rounded-3xl p-4 shadow-sm flex items-center">
          <div className="w-24 h-24 flex-shrink-0 relative">
            <Image
              src="/placeholder.svg?height=96&width=96"
              alt="ProtoClear"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-xl font-bold text-black">ProtoClear Natural Vanilla</h3>
            <h4 className="text-lg text-black">Flavor</h4>
            <p className="text-gray-600">ProtoClear</p>
          </div>
          <div className="ml-auto">
            <div className="bg-gray-200 p-2 rounded-full">
              <Lock className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Unlock Ratings Button */}
       {/*   
      <div className="relative flex justify-center -mt-8 mb-16">
        <button className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
          <Lock className="h-5 w-5" />
          <span className="font-medium">Unlock ratings</span>
        </button>
      </div>
      */}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto md:max-w-4xl lg:max-w-6xl bg-white pt-4 pb-8 px-6 flex justify-between items-center border-t border-gray-100">
        <div className="flex flex-col items-center text-green-500">
          <Sparkles className="h-6 w-6" />
          <span className="text-sm font-medium mt-1">Explore</span>
        </div>
        <Link href="/camera" className="bg-green-600 p-4 rounded-full -mt-8 shadow-lg">
          <Camera className="h-6 w-6 text-white" />
        </Link>
        <div className="flex flex-col items-center text-gray-400">
          <Clock className="h-6 w-6" />
          <span className="text-sm font-medium mt-1">History</span>
        </div>
      </div>
    </div>
    </div>
  )
}

