export default function Main(props) {
  return (
    <div className="image-container">
        <img 
          src={props.apodData?.hdurl}
          alt={props.apodData.title || "background image"}
          className="bg-image"
          />
    </div>
  )
}
