

export default function Footer(props) {
    
    return (
        <footer>
            <div className="bg-gradient"></div>
            <div>
                <h1>NASA | Astronomy Picture of the Day | {props.apodData?.date}</h1>
                <h2>{props.apodData?.title}</h2>
            </div>
            <button onClick={props.toggle}>
                <i className="fa-solid fa-circle-info"></i>
            </button>
        </footer>
    )
}
