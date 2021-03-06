import React from 'react';
import PropTypes from 'prop-types';
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import DiscountsItems from "./DiscountsItems";

const useStyles = makeStyles({
    paper: {
        width: 500,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        margin: '15px'
    },
});

const Discounts = ({ updateShowDiscounts, discounts, showDiscounts }) => {

    const classes = useStyles();

    return (
        <>
            <Typography variant="h6" component="h6">Discounts</Typography>
            <Switch
                checked={showDiscounts}
                onChange={updateShowDiscounts}
                color="primary"
                name="checkedB"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <DiscountsItems discounts={discounts} showDiscounts={showDiscounts} classes={classes} />
            {
            /*
            // on this will will lose the state
            showDiscounts ?
                <DiscountsItems />
            : <Paper classes={{ root: classes.paper }} > Discounts are hidden</Paper>
            */
            }
        </>
    );
};

Discounts.propTypes = {
    updateShowDiscounts: PropTypes.func,
    discounts: PropTypes.array,
    showDiscounts: PropTypes.bool,
};

export default Discounts;
