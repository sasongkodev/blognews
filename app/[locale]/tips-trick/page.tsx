import { getAllTips } from "@/lib/tips-trick";
import TipsTrickClient from "./TipsTrickClient";

export const metadata = {
    title: 'Tips & Trick',
    description: 'Collection of useful tips and tricks for developers - keyboard shortcuts, coding best practices, and productivity hacks.',
}

export default async function TipsTrickPage() {
    // Fetch data on the server
    const initialData = await getAllTips();

    return <TipsTrickClient initialData={initialData} />;
}
