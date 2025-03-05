"use client"

import Image from "next/image"
import { Search, User, Lock, Camera, Clock, Sparkles, Filter, SortDesc } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Home() {
  const [showFilters, setShowFilters] = useState(false)
  const [showOrder, setShowOrder] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulated API call with 1s delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const mockData = [
          {
            id: 1,
            name: 'Alpha BRAIN',
            brand: 'Onnit',
            details: '30 capsules',
            image: '/placeholder.svg'
          },
          {
            id: 2,
            name: 'RESCUE® PASTILLES',
            brand: 'Bach®',
            details: '50g e pastilles',
            image: '/placeholder.svg'
          },
          {
            id: 3,
            name: 'RESCUE® PASTILLES',
            brand: 'Bach®',
            details: '50g e pastilles',
            image: 'https://www.svgrepo.com/show/530582/document.svg'
          }
        ];

        setProducts(mockData as any);
        setError(null);
      } catch (err) {
    setError('Error fetching products' as any);
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
    
    console.log("holanda");
    
  }, []);

  return (
    <div className="w-full mx-auto bg-[#f0f9f5] min-h-screen flex flex-col md:max-w-4xl lg:max-w-6xl">
      <div className="w-full max-w-md mx-auto md:max-w-full">
      {/* Status Bar */}
      
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
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-yellow-300 to-orange-400 p-[3px] shadow-lg">
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
              console.log('Toggling filters:', !showFilters);
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
          <div className="fixed inset-x-0 bottom-0 max-w-md mx-auto md:max-w-4xl lg:max-w-6xl z-50">
            <div className="bg-white rounded-t-xl p-4 shadow-lg space-y-3 animate-in slide-in-from-bottom duration-300">
              <div className="flex justify-between items-center">
                <div className="font-medium">Filter by:</div>
                <button 
                  onClick={() => setShowFilters(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6L18 18"></path>
                  </svg>
                </button>
              </div>
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
              <div className="pt-2">
                <button 
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </div>
            <div className="bg-black bg-opacity-50 fixed inset-0 -z-10" onClick={() => setShowFilters(false)}></div>
          </div>
        )}

        {/* Order Options */}
        {showOrder && (
          <div className="fixed inset-x-0 bottom-0 max-w-md mx-auto md:max-w-4xl lg:max-w-6xl z-50">
            <div className="bg-white rounded-t-xl p-4 shadow-lg space-y-3 animate-in slide-in-from-bottom duration-300">
              <div className="flex justify-between items-center">
                <div className="font-medium">Order by:</div>
                <button 
                  onClick={() => setShowOrder(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18"></path>
                    <path d="M6 6L18 18"></path>
                  </svg>
                </button>
              </div>
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
              <div className="pt-2">
                <button 
                  onClick={() => setShowOrder(false)}
                  className="w-full bg-green-600 text-white py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
                >
                  Apply Order
                </button>
              </div>
            </div>
            <div className="bg-black bg-opacity-50 fixed inset-0 -z-10" onClick={() => setShowOrder(false)}></div>
          </div>
        )}
      </div>

      {/* Explore Section */}
      <div className="px-6 py-2">
        <h2 className="text-4xl font-bold text-black">Explore</h2>
      </div>

      {/* Product Cards */}
      <div className="px-6 py-2 space-y-4 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 flex-1">
        {loading && (
          <div className="col-span-full text-center py-4">
            Loading products...
          </div>
        )}

        {error && (
          <div className="col-span-full text-center py-4 text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && products.map((product) => (
          <div
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="bg-white rounded-3xl p-4 shadow-sm flex items-center cursor-pointer hover:shadow-md transition-all"
          >
            <div className="w-24 h-24 flex-shrink-0 relative">
              <Image
                src={product.image}
                alt={product.name}
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-xl font-bold text-black">{product.name}</h3>
              <p className="text-gray-600">{product.brand}</p>
              {product.details && <p className="text-gray-500">{product.details}</p>}
            </div>
            <div className="ml-auto">
              <div className="bg-gray-200 p-2 rounded-full">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>
        ))}
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

      {/* Product Detail Panel */}
      {selectedProduct && (
        <div className="fixed inset-x-0 bottom-0 max-w-md mx-auto md:max-w-4xl lg:max-w-6xl z-50">
          <div className="bg-white rounded-t-xl p-4 shadow-lg space-y-4 animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center">
              <div className="font-medium text-xl">{selectedProduct.name}</div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18"></path>
                  <path d="M6 6L18 18"></path>
                </svg>
              </button>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 h-32 relative flex-shrink-0">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-gray-600 text-lg">{selectedProduct.brand}</p>
                <p className="text-gray-500">{selectedProduct.details}</p>
                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => {
                  // Add to cart logic here
                  setSelectedProduct(null);
                }}
                className="w-full bg-green-600 text-white py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="bg-black bg-opacity-50 fixed inset-0 -z-10" onClick={() => setSelectedProduct(null)}></div>
        </div>
      )}

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

