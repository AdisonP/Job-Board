import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import applyServices from "../../services/apply.services"
import AppliedCard from "./applied";
import { logout } from '../../actions/auth';
import "./applied.css";

const AppliedList = (props) => {

    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const [appliedList, setAppliedList] = useState([]);

    useEffect(()=>{
        let mounted = true;
        applyServices.getApplied(auth.user.id)
        .then((res)=>{
            if(mounted){
                if(res.data.error != null){
                    dispatch(logout());
                } else {
                    setAppliedList(res.data);
                }
            }
        })
    }, []);

    const reload = () => {
        window.location.reload();
    }

    return(
        <div className="applied_zone">
            { appliedList.map(o => <AppliedCard obj={o} reload={reload} key={o.id}/>)}
        </div>
    )
}

export default AppliedList;