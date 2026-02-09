import { getAllShortcuts } from "@/lib/shortcut";
import ShortcutClient from "./ShortcutClient";

export const metadata = {
    title: 'Keyboard Shortcuts',
    description: 'Essential keyboard shortcuts for developers - boost your productivity with shortcuts for VS Code, terminal, and more.',
}

export default async function ShortcutPage() {
    // Fetch data on the server
    const initialData = await getAllShortcuts();

    return <ShortcutClient initialData={initialData} />;
}
