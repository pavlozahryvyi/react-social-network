import styles from "./Users.module.css";
import React from "react";


const Pagination = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map((page) => (<span
                    className={`${props.currentPage === page && styles.selectedPage} ${styles.page}`}
                    onClick={(e) => {
                        props.setCurrentPage(page)
                    }
                    }>{page}</span>))}
        </div>
    )
};

export default Pagination;