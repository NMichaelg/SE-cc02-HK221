import React, { useState, useRef } from 'react';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

const ConfirmPopupDemo = () => {
    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    };

    const confirm1 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Are you sure you want to proceed?',
            icon: 'pi pi-exclamation-triangle',
            accept,
            reject
        });
    };

    const confirm2 = (event) => {
        confirmPopup({
            target: event.currentTarget,
            message: 'Do you want to delete this record?',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
        });
    };

    return (
        <div>
            <Toast ref={toast} />

            <div className="card">
                <ConfirmPopup />

                <h5>Basic</h5>
                <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined"></Button>

                <h5>Using ConfirmPopup tag</h5>
                <ConfirmPopup target={document.getElementById('button')} visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                    icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
                <Button id="button" onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" />
            </div>
        </div>
    )
}
