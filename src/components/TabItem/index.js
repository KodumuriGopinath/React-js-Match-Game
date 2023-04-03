import './index.css'

const TabItem = props => {
  const {data, isActive, onClickTabItem} = props
  const {tabId, displayText} = data

  const onClickTab = () => {
    onClickTabItem(tabId)
  }

  const tabClassName = isActive ? 'name active' : 'name'

  return (
    <li className="tab-item">
      <button className={tabClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
