import React from 'react'
import NextLink from 'next/link'

interface LinkProps {
    url: string
    text: string
}

const Link = ({ url, text }: LinkProps) => {
  return (
    <NextLink href={url}>
        <span className="text-gray-600 text-sm">{text}</span>
    </NextLink>
  )
}

export default Link