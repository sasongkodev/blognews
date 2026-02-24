import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const rootDirectory = path.join(process.cwd(), 'content', 'tips-trick')

export type Tip = {
    title: string
    description: string
    category: string
    slug?: string
    image?: string
}

export type TipCategory = {
    id: string
    name: string
    iconName: string
    tips: Tip[]
    image?: string
}

export const getAllTips = async (): Promise<TipCategory[]> => {
    if (!fs.existsSync(rootDirectory)) {
        return []
    }

    const files = fs.readdirSync(rootDirectory)

    const categoriesMap: Record<string, TipCategory> = {}

    files.forEach((file) => {
        const id = file.replace(/\.mdx$/, '')
        const filePath = path.join(rootDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContent)

        // Support article-format files (no tips array)
        if (data.tips) {
            categoriesMap[id] = {
                id,
                name: data.title,
                iconName: data.icon || 'Lightbulb',
                tips: data.tips,
            }
        } else {
            // Article format: convert to tip and group by tag category
            const categoryName = data.category || (data.tags && data.tags[0]) || 'Artikel'
            const categoryId = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-')

            if (!categoriesMap[categoryId]) {
                categoriesMap[categoryId] = {
                    id: categoryId,
                    name: categoryName,
                    iconName: data.icon || 'BookOpen',
                    tips: [],
                }
            }

            categoriesMap[categoryId].tips.push({
                title: data.title,
                description: data.description || '',
                category: categoryName,
                slug: data.slug || id,
                image: data.image,
            })
        }
    })

    return Object.values(categoriesMap)
}
