import React, { useEffect } from 'react';
import {
    Pagination,
    PaginationItem
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@mui/styles';
import { getEstablishments } from '../../actions/establishmentActions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    ul: {
        justifyContent: 'space-round'
    }
})

const Paginate = (props) => {
    const classes_ = useStyles();
    const page = props.state.page;

    const { numberOfPages } = useSelector((state) => state.establishment);
    const dispatch = useDispatch();

    useEffect(() => {
    if (page) {
        dispatch(getEstablishments(page));
    }
    }, [dispatch, page]);

    return(
        <Pagination
            // classes={{ ul: classes_.ul}}
            count={numberOfPages}
            page={Number(page) || 1}
            shape="rounded"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/${props.state.type}?page=${item.page}`}/>
            )}
        />
    )
}

export default Paginate;