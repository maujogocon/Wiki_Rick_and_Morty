import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {
  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
 /* let next =()=>{
    setPageNumber((x)=> x+1);
  };

  let prev =() => {
    if (PageNumber ===1) return 1;
    setPageNumber((x)=> x-1);
  };

  return (
    <div className='container d-flex justify-content-center gap-5 my-5'>
            <button onClick={prev} className='btn btn-primary'>Prev</button>
            <button onClick={next} className='btn btn-primary'>Next</button>
    </div>
  )*/
  return (<>
   <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
   <ReactPaginate 
            
            className="pagination justify-content-center my-4 gap-4"
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            nextLabel="Next"
            previousLabel="Prev"
            previousClassName="btn btn-outline-primary fs-5 prev"
            nextClassName="btn btn-outline-primary fs-5 next"
            marginPagesDisplayed={width < 576 ? 1 : 2}
            pageRangeDisplayed={width < 576 ? 1 : 2}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
           
            onPageChange={(data)=>{
                setPageNumber(data.selected +1);
            }}
            pageCount={info?.pages}/>; 
   </>
   );         
};

export default Pagination
