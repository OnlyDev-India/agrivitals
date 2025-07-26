'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('light')
  })

  return (
    <div
      className="relative"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03) 1px,transparent 1px,transparent 32px),repeating-linear-gradient(90deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03) 1px,transparent 1px,transparent 32px)',
      }}
    >
      {/* Text content section with box pattern background */}
      <div className="container py-16 text-center relative z-10">
        {/* Main content */}
        <div className="max-w-2xl mx-auto">
          {richText && (
            <RichText
              className="mb-6 font-bold text-gray-900 leading-tight"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex justify-center gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* Landscape image section */}
      {media && typeof media === 'object' && (
        <div className="w-full h-96 md:h-[500px] relative">
          <Media fill imgClassName="object-cover" priority resource={media} />
          {/* Gradient overlay for blurry transition effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-gray-900 via-white/20 dark:via-gray-900/20 to-transparent pointer-events-none "></div>
        </div>
      )}
    </div>
  )
}
