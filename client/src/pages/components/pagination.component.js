import React from 'react';
import {
    Pagination,
    PaginationItem
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    ul: {
        justifyContent: 'space-round'
    }
})

const Paginate = () => {
    const classes_ = useStyles();

    return(
        <Pagination
            classes={{ ul: classes_.ul}}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/browse?page=${1}`}/>
            )}
        />
    )
}

export default Paginate;