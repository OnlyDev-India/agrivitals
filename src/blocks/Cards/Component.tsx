'use client'
import React, { useRef, useState, useEffect } from 'react'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import type { Page, Media as MediaType } from '@/payload-types'

export type CardItem = {
  title: string
  description: string
  image?: MediaType
  link?: {
    url?: string
    label?: string
    reference?: any
  }
}

export type CardsBlockProps = {
  title?: string
  description?: string
  cards?: CardItem[]
}

export const CardsBlock: React.FC<CardsBlockProps> = ({ title, description, cards }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 312 // Card width (288px) + gap (24px)
      const newScrollLeft =
        carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      })
    }
  }

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollPosition)
      checkScrollPosition()

      return () => carousel.removeEventListener('scroll', checkScrollPosition)
    }
  }, [cards])

  return (
    <div className="w-screen mx-[-80px] px-4">
      {/* Section Header */}
      {(title || description) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{description}</p>
          )}
        </div>
      )}

      {/* Carousel Container */}
      {cards && cards.length > 0 && (
        <div className="relative group">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
              aria-label="Scroll left"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
              aria-label="Scroll right"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* Cards Carousel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth py-6 pb-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-72 bg-white rounded-xl overflow-hidden transition-all duration-300 transform hover:${
                  index % 2 === 1 ? 'translate-y-6' : '-translate-y-1'
                } ${index % 2 === 1 ? 'translate-y-8' : ''}`}
              >
                {/* Card Image */}
                {card.image && (
                  <div className="h-80 overflow-hidden relative group/card">
                    <Media
                      resource={card.image}
                      fill
                      imgClassName="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-105 rounded-xl shadow-lg"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="p-5 relative">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover/card:text-green-600 transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Number indicator */}
                  <div className="absolute bottom-3 right-5 text-xs text-gray-400 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
