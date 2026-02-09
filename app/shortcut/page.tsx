import { getAllShortcuts } from "@/lib/shortcut";
import ShortcutClient from "./ShortcutClient";

export default async function ShortcutPage() {
    // Fetch data on the server
    const initialData = await getAllShortcuts();

    return <ShortcutClient initialData={initialData} />;
}
