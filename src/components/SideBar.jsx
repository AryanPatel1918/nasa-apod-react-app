

export default function SideBar(props) {
    return (
        <div className="sidebar">
            <div onClick={props.toggle} className="bg-overlay"></div>
            <div className="sidebar-contents">  
                <h2>{props.apodData?.title}</h2>
                <div className="description-container">
                    <p className="description-title">Description</p>
                    <p>{props.apodData?.explanation}</p>
                </div>
                <button onClick={props.toggle}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
