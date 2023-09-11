import React from 'react'

const Results = (props) => {
    const { allTabs, currentTabIndex } = props
    return (
        <div>
            {allTabs[currentTabIndex].content}
        </div>
    )
}

export default Results