import type { Block, Field } from 'payload'
import { CallToAction } from '../CallToAction/config'
import { Content } from '../Content/config'
import { MediaBlock } from '../MediaBlock/config'
import { FormBlock } from '../Form/config'
import { Cards } from '../Cards/config'

const layoutFields: Field[] = [
  {
    name: 'layoutType',
    label: 'Layout Type',
    type: 'radio',
    options: [
      {
        label: 'Full',
        value: 'full',
      },
      {
        label: 'Split',
        value: 'split',
      },
    ],
    defaultValue: 'full',
    required: true,
  },
  {
    name: 'fullBlock',
    label: 'Full Block',
    type: 'blocks',
    blocks: [CallToAction, Content, MediaBlock, FormBlock, Cards],
    admin: {
      condition: (_, siblingData) => siblingData.layoutType === 'full',
    },
  },
  {
    name: 'leftBlock',
    label: 'Left Block',
    type: 'blocks',
    blocks: [CallToAction, Content, MediaBlock, FormBlock],
    admin: {
      condition: (_, siblingData) => siblingData.layoutType === 'split',
    },
  },
  {
    name: 'rightBlock',
    label: 'Right Block',
    type: 'blocks',
    blocks: [CallToAction, Content, MediaBlock, FormBlock],
    admin: {
      condition: (_, siblingData) => siblingData.layoutType === 'split',
    },
  },
]

export const Section: Block = {
  slug: 'section',
  labels: {
    singular: 'Section',
    plural: 'Sections',
  },
  fields: [
    {
      name: 'sectionName',
      label: 'Section Name',
      type: 'text',
      required: true,
    },
    {
      name: 'layouts',
      label: 'Layouts',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: layoutFields,
    },
  ],
}
