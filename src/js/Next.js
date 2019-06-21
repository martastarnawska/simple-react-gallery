import React, {useState} from 'react';

function Next(props) {

    const [page, setPage] = useState(0);

    return (
        <button className="Gallery__button"
            onClick={() => {
                let nextPage = page + 1 
                props.setPageNumber(nextPage);
                setPage(nextPage);
                if (nextPage === 9) {
                    event.target.disabled = true; 
                }
            }
            }>Next</button>
    )
}

export default Next;