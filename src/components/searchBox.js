import React from "react";

const searchBox = ({searchChange})=> {
    return(
        <div className="pa2">
            <input 
                type="search" 
                placeholder="search robots"
                className ="pa3 b--green bg-lightest-blue "
                onChange={searchChange}
            />
        </div>
        
    )
}

export default searchBox;