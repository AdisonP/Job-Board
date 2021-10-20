import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './advertisement_list.css';
import Auth from '../../../services/advertisement.services'
import Adv from '../advertisement_card/advertisement_card';


const  AdvertisementList = (props) => {

  const [advs, setadvs] = useState([]);

  useEffect(() => {
    let mounted = true;

    if(mounted){
      axios.get('http://localhost:3001/advertisements/cards')
      .then(res => {
        const advList = res.data;
        setadvs(advList != null ? advList : []);
      })
    }
  }, [])


    return (
      <div className="advlist">
        { advs.map(adv => <Adv adv={adv} key={adv.id} />)}
      </div>
    )
  
}

export default AdvertisementList;