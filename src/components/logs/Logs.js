import React, {useState, useEffect} from 'react';
import LogItem from "./Logitem";
import Preloader from "../layout/Preloader";

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs(); 
    }, []);

    const getLogs = async () => {
        setLoading(true);

        const res = await fetch("/logs");

        
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }
    
    if(loading){
        return <Preloader />;
    }
    return (
        <ul className = "collection with-header">
            <li className="collection-header">
                <h4 className="center">Systems Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>): (logs.map(log => <li><LogItem log={log} key={log.id}/></li>))}
        </ul>
    )
}


export default Logs