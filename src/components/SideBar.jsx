export default function SideBar(props) {
    function htmlToPlainText(html) {
        if (!html) {
            return ""
        }

        const doc = new DOMParser().parseFromString(html, "text/html")
        return (doc.body.textContent || "")
            .replace(/^\s*Explanation:\s*/i, "")
            .replace(/\s+/g, " ")
            .trim()
    }

    return (
        <div className="sidebar">
            <div onClick={props.toggle} className="bg-overlay"></div>
            <div className="sidebar-contents">  
                <h2>{props.apodData?.title}</h2>
                <div className="description-container">
                    <p className="description-title">Description</p>
                    <p>{htmlToPlainText(props.apodData?.explanation)}</p>
                </div>
                <button onClick={props.toggle}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    )
}
