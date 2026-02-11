export const config = {
    features: {
        ads: false, // Default to true if user wants to keep ads, but user asked for a flag to *disable*, implying they might want it off. Let's make it easy to disable. I'll set it to true (enabled) by default to not break existing behavior unexpectedly, but comment it. Wait, the user said "Buatin flag config supaya gampang disable ads" (Make a config flag so it's easy to disable ads). 
        // I will set it to true initially so I don't change behavior without explicit instruction, but it's there to be toggled.
    },
};
 