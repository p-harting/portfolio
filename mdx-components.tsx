import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className='text-white'>{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className='text-white'>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className='text-white'>{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className='text-white'>{children}</h4>
    ),
    p: ({ children }) => (
      <p className='text-white'>{children}</p>
    ),
    li: ({ children }) => (
      <li className='text-white'>{children}</li>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  }
}