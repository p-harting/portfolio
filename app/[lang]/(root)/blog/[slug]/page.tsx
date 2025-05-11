import { readdirSync } from 'fs'
import path from 'path'
import { i18n } from '@/i18n-config'
import type { Locale } from '@/i18n-config'

export default async function Page({ params, }: { params: Promise<{ lang: string; slug: string }>})
{
  const { slug } = await params
  const Post = (await import(`@/articles/${slug}.mdx?`)).default
  return <Post />
}

export function generateStaticParams(): Array<{ lang: Locale; slug: string }> {
  const articlesDir = path.join(process.cwd(), 'articles')
  const articleFiles = readdirSync(articlesDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))

  return i18n.locales.flatMap(lang => 
    articleFiles.map(slug => ({ lang, slug }))
  )
}
 
export const dynamicParams = false
