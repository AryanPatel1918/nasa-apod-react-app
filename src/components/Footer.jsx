

export default function Footer(props) {
    
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h2><a href={props.apodData.hdurl || props.apodData.url} target="_blank" title="Click for full image">{props.apodData.title}</a></h2>
                <h1>NASA | Astronomy Picture of the Day | {props.apodData?.date}</h1>
            </div>
            <button onClick={props.toggle}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
