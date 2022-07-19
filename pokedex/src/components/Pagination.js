import { Pagination } from "react-bootstrap";

const PaginationRender = ({ postsPerPage, totalPosts, paginate }) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination className='justify-content-center'>
            <Pagination.First />
            <Pagination.Prev />

            {pageNumbers.map(num => (
                <li key={num} className="page-item">
                    <a onClick={() => paginate(num)} href="#" className="page-link">
                        {num}
                    </a>
                </li>
            ))}

            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )

};

export default PaginationRender;