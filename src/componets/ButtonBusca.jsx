import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Spinner } from 'reactstrap';


function ButtonBusca() {
    return (
        <div>
            <Button
                color='primary'
                disabled
            >
                <Spinner size="sm">
                    Loading...
                </Spinner>
                <span>
                    {' '}Procuarando
                </span>
            </Button>
        </div>
    )
}
export default ButtonBusca;