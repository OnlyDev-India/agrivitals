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
      <h2 className="text-2xl font-bold mb-6">{sectionName}</h2>
      {layouts?.map((layout, index) => {
        if (layout.layoutType === 'full' && layout.fullBlock) {
          return (
            <div key={index} className="mb-8">
              <RenderBlocks blocks={layout.fullBlock as any} />
            </div>
          )
        }

        if (layout.layoutType === 'split') {
          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>{layout.leftBlock && <RenderBlocks blocks={layout.leftBlock as any} />}</div>
              <div>{layout.rightBlock && <RenderBlocks blocks={layout.rightBlock as any} />}</div>
            </div>
          )
        }

        return null
      })}
    </section>
  )
}
