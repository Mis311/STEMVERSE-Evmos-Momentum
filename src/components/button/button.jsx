export default function Button(props) {
  return (
    <button className={'btn '  + (props.className + " ") + (props.caps && " uppercase ")}>
      {props.content}
    </button>
  )
}