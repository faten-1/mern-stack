import React from 'react'

const Tabs = (props) => {
    const { allTabs, currentTabIndex, setCurrentTabIndex } = props
    
const setSelectedTab = (index) => {
    setCurrentTabIndex(index);
}

    return (
        <div>
            {allTabs.map((item, index) =>
                <button onClick={(e) => {
                    setSelectedTab(index)
                }}>
                    {item.label}
                </button>)
            }
        </div >
    )}

export default Tabs