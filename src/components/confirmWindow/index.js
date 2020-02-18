import React from 'react';
import './style.css';

export const ConfirmWindow = props => {
    const {
        isShow = false,
        tile = '',
        handleSuccess = () => console.log('handleSuccess'),
        handleFailure = () => console.log('handleFailure'),
        closeWindow = () => console.log('closeWindow')
    } = props || {};

    return (
        <>
            {isShow ? <div className={'wrap-confirm'}>
                <div className={'inner-container-confirm zoomIn animated'}>
                    <div className="header">
                        HEADER
                    </div>
                    <div className="body">
                        <h4>{tile}</h4>
                    </div>
                    <div className="footer">
                        <button
                            className={'control-btn'}
                            onClick={() => {
                                handleSuccess();
                                closeWindow();
                            }}
                        >Yes
                        </button>
                        <button
                            className={'control-btn'}
                            onClick={() => {
                                handleFailure();
                                closeWindow();
                            }}
                        >No
                        </button>
                    </div>
                </div>
            </div> : null}
        </>
    )
};