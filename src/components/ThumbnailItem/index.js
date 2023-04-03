import './index.css'

const ThumbnailItem = props => {
  const {data, onClickImageItem} = props
  const {thumbnailUrl, id} = data

  const clickImage = () => {
    onClickImageItem(id)
  }

  return (
    <li>
      <button onClick={clickImage} className="image-button" type="button">
        <img className="thumbnail-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}
export default ThumbnailItem
