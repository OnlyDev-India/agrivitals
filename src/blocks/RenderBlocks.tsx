import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { SectionBlock } from '@/blocks/Section/Component'
import { CardsBlock } from '@/blocks/Cards/Component'

const blockComponents = {
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  section: SectionBlock,
  cards: CardsBlock,
}

// Define a type for all supported blocks, including Section
export type SupportedBlock =
  | (Page['layout'][0] & { blockType: 'content' | 'cta' | 'formBlock' | 'mediaBlock' | 'cards' })
  | {
      blockType: 'section'
      sectionName: string
      layouts?: Array<{
        layoutType: 'full' | 'split'
        fullBlock?: Page['layout'][0][]
        leftBlock?: Page['layout'][0][]
        rightBlock?: Page['layout'][0][]
      }>
    }

export const RenderBlocks: React.FC<{
  blocks: SupportedBlock[]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          if (block.blockType === 'section') {
            return (
              <div key={index}>
                <SectionBlock key={index} sectionName={block.sectionName} layouts={block.layouts} />
              </div>
            )
          }

          const { blockType } = block
          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
