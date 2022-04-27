import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Messsages(props){
    const { t } = useTranslation();

    return (
        <div className="card shadow col-11 mt-3 m-auto messagesList">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold">{t('QUICK_NAV')}</h6>
            </div>
            <div className="card-body">
                <div className='col-12 row'>
                    <div className='col-12 col-md-2 col-xl-1'>
                        <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/update-60.png`} className='icon' alt=''/>
                    </div>
                    <div className='col-12 col-md-10 col-xl-11'>
                        <span>2020-04-03 25:45</span>
                        <h1>dgfddsfsdfsdfsdfsdgdfg</h1>
                        <p>
                            fdfsgdf
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}