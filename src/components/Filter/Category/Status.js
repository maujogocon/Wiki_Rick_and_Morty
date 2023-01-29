import React from 'react';
import FilterBtn from '../FilterBtn';

const Status = ({ setStatus, setPageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"];
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
                <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Status
                </button>
            </h2>
            <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">

                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map((items, index) => (
                        <FilterBtn
                            task={setStatus}
                            setPageNumber={setPageNumber}
                            key={index}
                            index={index}
                            items={items}
                            name="status" />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Status;