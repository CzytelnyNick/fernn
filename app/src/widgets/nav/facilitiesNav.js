import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FacilitiesMainNav(props){
    const { t } = useTranslation();
    
    return <>
        <div className="leftPart d-none d-lg-block" style={{width: props.leftNav.width+"px"}}>
            <nav aria-expanded="false">
                <div className="smallNav" style={{
                    opacity: 1-props.leftNav.opacity, 
                    display: (props.leftNav.opacity==1) ? "none" : "block"
                }}>
                    <div className="navItem active">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/home-50.png`} alt=""/>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/add-50.png`} alt=""/>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/data-sheet-50.png`} alt=""/>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/chart-50.png`} alt=""/>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/settings-50.png`} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="fullNav" style={{opacity: props.leftNav.opacity}}>
                    <div className="navItem active">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/home-50.png`} alt=""/>
                            <span className="itemContent">{t('HOME')}</span>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/add-50.png`} alt=""/>
                            <span className="itemContent">{t('ADD')}</span>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/data-sheet-50.png`} alt=""/>
                            <span className="itemContent">{t('COMPLAINTS')}</span>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/chart-50.png`} alt=""/>
                            <span className="itemContent">{t('STATISTICS')}</span>
                        </div>
                    </div>
                    <div className="navItem">
                        <div>
                            <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/settings-50.png`} alt=""/>
                            <span className="itemContent">{t('SETTINGS')}</span>
                        </div>
                    </div>
                </div>

                <div className="toogleNav" style={{left: (props.leftNav.width-50)/2+"px"}}>
                    <img 
                        onClick={props.toogleLeftNav} 
                        style={{transform: `rotate(${props.leftNav.toogleRotate}deg)`}} 
                        src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/circled-right-50.png`}
                    />

                </div>
            </nav>
        </div>
        <div className="topPart">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-brand logo" href="#">
                        <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/f.png`} alt="" />
                        <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/e.png`} alt="" />
                        <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/r.png`} alt="" />
                        <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/n.png`} alt="" />
                        <img src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/n.png`} alt="" />
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-lg-none">
                            <li className="nav-item p-2">
                                <img 
                                    className='d-inline' 
                                    width={'30px'} 
                                    src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/home-50.png`} 
                                    alt=''
                                />
                                <span>{t('HOME')}</span>
                            </li>
                            <li className="nav-item p-2">
                                <img 
                                    className='d-inline' 
                                    width={'30px'} 
                                    src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/add-50.png`} 
                                    alt=''
                                />
                                <span>{t('ADD')}</span>
                            </li>
                            <li className="nav-item dropdown p-2">
                                <span className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img 
                                        className='d-inline' 
                                        width={'30px'} 
                                        src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/data-sheet-50.png`} 
                                        alt=''
                                    />
                                    {t('ADD')}
                                </span>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item p-2">
                                <img 
                                    className='d-inline' 
                                    width={'30px'} 
                                    src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/chart-50.png`} 
                                    alt=''
                                />
                                <span>{t('STATISTICS')}</span>
                            </li>
                            <li className="nav-item p-2">
                                <img 
                                    className='d-inline' 
                                    width={'30px'} 
                                    src={`${process.env.REACT_APP_FERNN_API_HOST}/v1/files/system/icons/settings-50.png`} 
                                    alt=''
                                />
                                <span>{t('SETTINGS')}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div> 
    </>
}