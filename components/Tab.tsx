"use client"

import { useState } from "react"

export default function Tab() {

    const [activeTab, setActiveTab] = useState(0)

    function changeTab(choice: number) {
        setActiveTab(choice)
    }

    function returnContent(choice: number) {
        if(choice === 0) {
            return(<h2>Ausbildung</h2>)
        }
        else if (choice === 1) {
            return(<h2>Erfahrung</h2>)
        }
        else if (choice === 2) {
            return(<h2>Zertifikate</h2>)
        }
        else {
            return(<h2>Error with tab selection</h2>)
        }
    }

    return (
        <div className="text-white">
            <h2>Ausbildung</h2>
            <a>Download resume</a>
            <div>
                <ul>
                    <li onClick={() => changeTab(0)}>Ausbildung</li>
                    <li onClick={() => changeTab(1)}>Erfahrung</li>
                    <li onClick={() => changeTab(2)}>Zertifikate</li>
                </ul>
            </div>
            <div>
                {returnContent(activeTab)}
            </div>
        </div>

    )
}