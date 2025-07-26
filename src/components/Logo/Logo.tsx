'use client'
import { useTheme } from '@payloadcms/ui'
import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Only Dev Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px] rounded-full', className)}
      style={{ borderRadius: '10000px', filter: isDark ? 'invert(1)' : 'invert(0)' }}
      src="https://avatars.githubusercontent.com/u/221428060?s=400&u=d88d156e1f6d20018d23f95b8199104ccf8ad670&v=4"
    />
  )
}

export default Logo
