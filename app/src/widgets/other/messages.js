import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Messsages(props){
    const { t } = useTranslation();

    const [lastMessages, setLastMessages] = useState([])

    useEffect(() => {
        // axios.get(`${process.env.REACT_APP_FERNN_API_HOST}/v1/messages/messages`, { headers: {}, params: {props.props} })
        //      .then((res) => { return res.data })
        //      .finally((data) => {setLastMessages(data)})
    })

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
                        <h1>title</h1>
                        <p>
                            content
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}