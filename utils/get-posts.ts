import fs from 'fs/promises'
import path from 'path'

interface Metadata {
    title: string;
    description: string;
    author: string;
    date: string;
    tags: string[];
    slug?: string;
}

export async function getPosts() {
    const postsDir = path.join(process.cwd(), 'articles')
    const files = await fs.readdir(postsDir)
    
    const posts = await Promise.all(files.map(async (file) => {
        const { metadata } = await import(`@/articles/${file}`)
        const slug = file.replace(/\.mdx$/, '')
        return { ...metadata, slug }
    }))

    return posts
}
