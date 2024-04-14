export default function InfoLink(props){
    return(
        <p><a href={"#"+props.href}>{props.text}</a></p>
    )
}