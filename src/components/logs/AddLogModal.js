import React, {useSate} from 'react'

const AddLogModal = () => {
    const [message, setMessage] = useState("";
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-filed">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />

                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-filed">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>

                        </select>
                        
                        </div>
                    </div>
                </div>
            </div>
            
    
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
};

export default AddLogModal