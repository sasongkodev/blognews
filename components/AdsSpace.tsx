import React from 'react';

interface AdsSpaceProps {
    url?: string;
    className?: string;
}

const AdsSpace = ({
    url = "https://www.effectivegatecpm.com/s32uck9u?key=28c13226153cae395ef286d46ed8ba83",
    className = ""
}: AdsSpaceProps) => {
    return (
        <div className={`w-full flex justify-center my-8 ${className}`}>
            <div className="w-full max-w-[728px] h-[90px] bg-slate-800/50 rounded-lg flex items-center justify-center overflow-hidden border border-slate-700">
                <iframe
                    src={url}
                    width="728"
                    height="90"
                    frameBorder="0"
                    scrolling="no"
                    title="Advertisement"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    );
};

export default AdsSpace;
