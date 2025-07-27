import React from 'react'
import { toKebabCase } from '@/utilities/toKebabCase'
import { RenderBlocks } from '../RenderBlocks'
import type { Page } from '@/payload-types'

export type SectionBlockProps = {
  sectionName: string
  layouts?: Array<{
    layoutType: 'full' | 'split'
    fullBlock?: Page['layout'][0][]
    leftBlock?: Page['layout'][0][]
    rightBlock?: Page['layout'][0][]
  }>
}

export const SectionBlock: React.FC<SectionBlockProps> = ({ sectionName, layouts }) => {
  const sectionId = toKebabCase(sectionName)

  return (
    <section id={sectionId} className="my-16 container">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            {sectionName}
          </h2>
          <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
      </div>
      {layouts?.map((layout, index) => {
        if (layout.layoutType === 'full' && layout.fullBlock) {
          return (
            <div key={index} className="mb-8">
              <RenderBlocks blocks={layout.fullBlock as any} />{' '}
              {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
            </div>
          )
        }

        if (layout.layoutType === 'split') {
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>{layout.leftBlock && <RenderBlocks blocks={layout.leftBlock as any} />}</div>{' '}
              {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
              <div>
                {layout.rightBlock && <RenderBlocks blocks={layout.rightBlock as any} />}
              </div>{' '}
              {/* eslint-disable-line @typescript-eslint/no-explicit-any */}
            </div>
          )
        }

        return null
      })}
    </section>
  )
}
