import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


const rootDirectory = path.join(process.cwd(), 'content', 'shortcuts')

export type Shortcut = {
    key: string
    description: string
    category: string
}

export type ShortcutCategory = {
    id: string
    name: string
    iconName: string
    shortcuts: Shortcut[]
}

export const getAllShortcuts = async (): Promise<ShortcutCategory[]> => {
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
            shortcuts: data.shortcuts,
        }
    })

    return categories
}
