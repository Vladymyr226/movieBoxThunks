import './buttonPaginator.scss'

type ButtonPropsType = {
  childText: string
  pagination(): void
}

const ButtonPaginator = ({ childText, pagination }: ButtonPropsType) => {
  return (
    <button className="btn" onClick={pagination}>
      {childText}
    </button>
  )
}

export default ButtonPaginator
