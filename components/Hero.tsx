import Image from "next/image"

import { Dictionary } from "@/i18n-config";

export default function Hero({ dictionary }: { dictionary: Dictionary["hero"] })
{

    return (
        <div className="flex flex-row max-w-6xl mt-12">
            <div className="flex flex-col max-w-[60%] gap-4">
                <h2 className="text-white text-3xl"><span className="text-purple-500">Fullstack Engineer</span> aus Deutschland</h2>
                <h1 className="text-white text-7xl">Hallo, mein Name ist <span className="text-purple-500">Pascal Harting</span></h1>
                <div className="border border-solid border-white rounded-4xl py-4 px-8 text-white text-xl w-2xs">
                    <p>{dictionary.download}</p>
                </div>
                <p className="text-white text-xl">Ich entwickel <span className="underline">schnelle</span> und <span className="underline">skalierbare</span> Apps mit dem Optimierungsfokus eines Marketers.</p>
            </div>
            <div>
                <div className="flex items-center justify-end gap-2 border border-solid border-white rounded-4xl py-4 px-8">
                    <div className="relative">
                        <div className="h-3 w-3 bg-green-500 rounded-full animate-ping opacity-75 absolute"></div>
                        <div className="h-3 w-3 bg-green-500 rounded-full relative"></div>
                    </div>
                    <p className="text-white text-xl">Open to work</p>
                </div>
                <div>
                    <Image
                    src="/hero.png"
                    alt="An image of me"
                    width={389}
                    height={389} />
                </div>
            </div>
        </div>
    )
}
