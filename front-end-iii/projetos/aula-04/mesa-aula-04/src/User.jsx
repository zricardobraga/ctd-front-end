export default function User(props) {
    return(
        <>
            <span>
            Oi, eu sou {props.dev}
            </span>
            <img src={props.children} alt="" />
        </>
        
    )

}
