import type { Block, Field } from 'payload'

const cardFields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
    label: 'Card Title',
  },
  {
    name: 'description',
    type: 'textarea',
    required: true,
    label: 'Card Description',
  },
  {
    name: 'image',
    type: 'upload',
    relationTo: 'media',
    label: 'Card Image',
  },
  {
    name: 'link',
    type: 'group',
    label: 'Card Link (Optional)',
    fields: [
      {
        name: 'url',
        type: 'text',
        label: 'URL',
      },
      {
        name: 'label',
        type: 'text',
        label: 'Link Label',
        defaultValue: 'Learn More',
      },
    ],
  },
]

export const Cards: Block = {
  slug: 'cards',
  interfaceName: 'CardsBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Cards',
      admin: {
        initCollapsed: true,
      },
      fields: cardFields,
    },
  ],
  labels: {
    singular: 'Cards',
    plural: 'Cards',
  },
}
