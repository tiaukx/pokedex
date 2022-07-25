import { Pagination } from "react-bootstrap";

const PaginationRender = ({ postsPerPage, totalPosts, paginate, currentPage }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        //gets the total number of pages and stores them in an array
        pageNumbers.push(i);
    }

    //states how many numbers will show on either side of active page
    const siblingCount = 5;

    //renders ellipses on pagination bar when currentPage is larger than 1 + sibling count
    const leftDots = () => {
        if (currentPage > pageNumbers[0] + siblingCount) {
            return <Pagination.Ellipsis onClick={() => paginate(currentPage -= (siblingCount + 1))} />;
        }
    }

    //renders ellipses on pagination bar when currentPage is smaller than the last page minus sibling count
    const rightDots = () => {
        if (currentPage < pageNumbers.length - siblingCount) {
            return <Pagination.Ellipsis onClick={() => paginate(currentPage += (siblingCount + 1))} />;
        }
    }

    const limitToSibling = () => {
        //temp array to store numbers to be displayed
        const siblingArray = [];

        //lower numbers
        for (let i = currentPage - siblingCount; i < currentPage && i >= 0; i++) {
            //if not added loop cancels when you reach 0, meaning it wouldn't if current page minus sibling count goes below 0
            if(i < 1) continue;
            siblingArray.push(
                <li key={i} className={`page-item`}>
                    <a onClick={() => paginate(i)} href="#" className="page-link">
                        {i}
                    </a>
                </li>);
        }
        
        //higher numbers
        for (let i = currentPage; i <= (currentPage + siblingCount) && i <= pageNumbers.length; i++) {
            let active = currentPage === i ? 'active' : '';
            siblingArray.push(
                <li key={i} className={`page-item ${active}`}>
                    <a onClick={() => paginate(i)} href="#" className="page-link">
                        {i}
                    </a>
                </li>);
        }

        return siblingArray;
    }

    return (
        
        <Pagination className='justify-content-center'>
            <Pagination.First onClick={() => paginate(currentPage = 1)} />
            <Pagination.Prev onClick={() => paginate(currentPage - 1)} />

            {leftDots()}
            {limitToSibling()}
            {rightDots()}

            <Pagination.Next onClick={() => paginate(currentPage + 1)} />
            <Pagination.Last onClick={() => paginate(currentPage = pageNumbers.length)} />
        </Pagination>
    )

};

export default PaginationRender;