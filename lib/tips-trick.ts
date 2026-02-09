import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const rootDirectory = path.join(process.cwd(), 'content', 'tips-trick')

export type Tip = {
    title: string
    description: string
    category: string
}

export type TipCategory = {
    id: string
    name: string
    iconName: string
    tips: Tip[]
}

export const getAllTips = async (): Promise<TipCategory[]> => {
    if (!fs.existsSync(rootDirectory)) {
        return []
    }

    const files = fs.readdirSync(rootDirectory)

    const categories = files.map((file) => {
        const id = file.replace(/\.mdx$/, '')
        const filePath = path.join(rootDirectory, file)
        const fileContent = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContent)

        return {
            id,
            name: data.title,
            iconName: data.icon,
            tips: data.tips,
        }
    })

    return categories
}
