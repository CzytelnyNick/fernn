import React from 'react'
import { useTranslation } from 'react-i18next';

// class Nav extends React.Component{
//     constructor(props) {
//       super(props);
//       this.state = {
//         language: []
//       }
//     }

//     render(){
//         return(
//             <div className="card shadow col-11 mt-3 m-auto">
//                 <div className="card-header py-3">
//                     <h6 className="m-0 font-weight-bold">dsfsdfsdfsdfsdfsd[066sdfsdf</h6>
//                 </div>
//                 <div className="card-body">
//                     <div className="row m-auto">
//                         <div className="col-12 col-md-4">
//                             <div className="m-auto text-center">
//                                 <div className="list-group">
//                                     <div onClick={() => this.props.changeScreen(0)} className="list-group-item  active" aria-current="true">dsfsdfsdfsdfsdfsd[166</div>
//                                     <div onClick={() => this.props.changeScreen(2)} className="list-group-item">ghjghjgh</div>
//                                     <div onClick={() => this.props.changeScreen(9)} className="list-group-item">dsfsdfsdfsdfsdfsd[3]</div>
//                                     <div onClick={() => this.props.changeScreen(10)} className="list-group-item">gfdgdfgdfg</div>
//                                     <div onClick={() => { window.location.href = '/' }} className="list-group-item">dsfsdfsdfsdfsdfsd[5]</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-12 col-md-4">
//                             <div className=" m-auto text-center">
//                                 <div className="list-group">
//                                 <div onClick={() => {this.props.changeScreen(6); this.props.navChangeComplaintListType(0)}} className="list-group-item">dsfsdfsdfsdfsdfsd[666</div>
//                                     <div onClick={() => {this.props.changeScreen(6); this.props.navChangeComplaintListType(1)}} className="list-group-item">dsfsdfsdfsdfsdfsd[766</div>
//                                     <div onClick={() => {this.props.changeScreen(6); this.props.navChangeComplaintListType(2)}} className="list-group-item">dsfsdfsdfsdfsdfsd[866</div>
//                                     <div onClick={() => {this.props.changeScreen(6); this.props.navChangeComplaintListType(3)}} className="list-group-item">dsfsdfsdfsdfsdfsd[966</div>
//                                     <div onClick={() => {this.props.changeScreen(6); this.props.navChangeComplaintListType(4)}} className="list-group-item">dsfsdfsdfsdfsdfsd[1066</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-12 col-md-4">
//                             <div className=" m-auto text-center">
//                                 <div className="list-group">
//                                     <div href="/?Work=true#kontakt" className="list-group-item ">dsfsdfsdfsdfsdfsd[1166</div>
//                                     <div href="/doc/Dokumentacja_Fernn.pdf" className="list-group-item " target="_blank"><strong>dsfsdfsdfsdfsdfsd[1266</strong></div>
//                                     <div href="/regulations" className="list-group-item ">dsfsdfsdfsdfsdfsd[1366</div>
//                                     <div href="/g" className="list-group-item ">dsfsdfsdfsdfsdfsd[1466</div>
//                                     <div data-toggle="modal" data-target="#logoutModal" className="list-group-item ">dsfsdfsdfsdfsdfsd[1566</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

export default function Nav(props){
    const { t } = useTranslation();

    console.log("p", props);
    return (
        <div className="card shadow col-11 mt-3 m-auto">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold">dsfsdfsdfsdfsdfsd[066sdfsdf</h6>
            </div>
            <div className="card-body">
                <div className="row m-auto">
                    <div className="col-12 col-md-4">
                        <div className="m-auto text-center">
                            <div className="list-group">
                                <div onClick={() => props.changeScreen(0)} className="list-group-item  active" aria-current="true">{t('HOME')}</div>
                                <div onClick={() => props.changeScreen(2)} className="list-group-item">{t('ADD')}</div>
                                <div onClick={() => props.changeScreen(9)} className="list-group-item">{t('COMPLAINTS')}</div>
                                <div onClick={() => props.changeScreen(10)} className="list-group-item">{t('STATISTICS')}</div>
                                <div onClick={() => { window.location.href = '/' }} className="list-group-item">{t('SETTINGS')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className=" m-auto text-center">
                            <div className="list-group">
                            <div onClick={() => {props.changeScreen(6); props.navChangeComplaintListType(0)}} className="list-group-item">{t('ALL')}</div>
                                <div onClick={() => {props.changeScreen(6); props.navChangeComplaintListType(1)}} className="list-group-item">{t('REPORTED')}</div>
                                <div onClick={() => {props.changeScreen(6); props.navChangeComplaintListType(2)}} className="list-group-item">{t('SENT')}</div>
                                <div onClick={() => {props.changeScreen(6); props.navChangeComplaintListType(3)}} className="list-group-item">{t('forCOLLECTION')}</div>
                                <div onClick={() => {props.changeScreen(6); props.navChangeComplaintListType(4)}} className="list-group-item">{t('RECEIVED')}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className=" m-auto text-center">
                            <div className="list-group">
                                <div href="/?Work=true#kontakt" className="list-group-item ">{t('RECEIVED')}</div>
                                <div href="/doc/Dokumentacja_Fernn.pdf" className="list-group-item " target="_blank">{t('RECEIVED')}</div>
                                <div href="/regulations" className="list-group-item ">{t('MAIN_PAGE')}</div>
                                <div href="/g" className="list-group-item ">{t('MAIN_PAGE')}</div>
                                <div data-toggle="modal" data-target="#logoutModal" className="list-group-item ">{t('LOGOUT')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}