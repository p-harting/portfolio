"use client"

import { useState } from "react"

export default function Tab() {

    const [activeTab, setActiveTab] = useState(0)

    function changeTab(choice: number) {
        setActiveTab(choice)
    }

    function returnContent(choice: number) {
        if(choice === 0) {
            return(
                <div className="flex-row items-center content-center justify-center">
                    <div className="flex">
                        <div className="flex">
                            <p>2024 - 2025</p>
                            <div className="w-6 h-6 bg-gray-300 border-4 border-gray-500 rounded-full"></div>
                        </div>
                        <div className="bg-purple-600 border-2 border-gray-400 rounded-2xl p-2 max-w-96">
                            <h4 className="text-lg underline font-bold">Diploma Full Stack Software Development</h4>
                            <p>Acquired agile development practices and end-to-end system design through immersive projects. Strengthened user-centric problem-solving, debugging workflows, and cross-functional collaboration — critical for delivering scalable apps.</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-1 h-20 bg-gray-300"></div>
                    </div>
                    <div className="flex">
                        <div className="bg-black border-2 border-gray-400 rounded-2xl p-2 max-w-96">
                            <h4 className="text-lg font-bold">BSc Arts, Game Art & 3D Animation</h4>
                            <p>Developed problem-solving, technical precision, and UI/UX design intuition. Enhanced project management and collaboration skills.</p>
                        </div>
                        <div className="flex">
                            <div className="w-6 h-6 bg-gray-300 border-4 border-gray-500 rounded-full"></div>
                            <p>2016 - 2019</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-1 h-20 bg-gray-300"></div>
                    </div>
                    <div className="flex">
                        <div className="flex">
                            <p>2015 - 2016</p>
                            <div className="w-6 h-6 bg-gray-300 border-4 border-gray-500 rounded-full"></div>
                        </div>
                        <div className="bg-black border-2 border-gray-400 rounded-2xl p-2 max-w-96">
                            <h4 className="text-lg font-bold">Mittlere Reife</h4>
                            <p>Focused on core subjects including mathematics, sciences, and computer science. Developed foundational academic and analytical skills.</p>
                        </div>
                    </div>
                </div>
            )
        }
        else if (choice === 1) {
            return(
                <div className="flex-row items-center content-center justify-center">
                </div>
            )
        }
        else if (choice === 2) {
            return(<h2>Zertifikate</h2>)
        }
        else {
            return(<h2>Error with tab selection</h2>)
        }
    }

    return (
        <div className="text-white mb-8">
            <h2 className="text-white text-4xl">Ausbildung</h2>
            <a>Download resume</a>
            <div className="mb-2">
                <ul className="flex max-w-6xl border border-white rounded-2xl justify-center">
                    <li className="p-6 mr-2 border border-white rounded-2xl" onClick={() => changeTab(0)}>Ausbildung</li>
                    <li className="p-6 border border-white rounded-2xl" onClick={() => changeTab(1)}>Erfahrung</li>
                    <li className="p-6 ml-2 border border-white rounded-2xl" onClick={() => changeTab(2)}>Zertifikate</li>
                </ul>
            </div>
            <div className="border border-white rounded-2xl max-w-6xl p-4">
                {returnContent(activeTab)}
            </div>
        </div>

    )
}