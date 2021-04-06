import React, {useEffect, useState} from "react";
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import {Maybe} from "../../types/types";

export interface State extends SnackbarOrigin {
    open: boolean;
}

interface NotificationProps {
    error?: Maybe<string>
}

function Notification({error}: NotificationProps) {

    useEffect(() => {
        if(error) {
            setState({ ...state, open: true });
        }
    }, [error])

    const [state, setState] = useState<State>({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',
    });

    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    return <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={error}
        key={vertical + horizontal}
    />
}

export default Notification;