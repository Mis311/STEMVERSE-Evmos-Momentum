export default function Button(props) {
  return (
    <button className={'btn ' + (props.caps && " uppercase ") + (props.className)}>
      {props.content}
    </button>
  )
}