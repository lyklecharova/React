export default function Heading(props){
    return(
        <h2 className = 'site-heading'>{props.children}</h2> // children е служебно пропърти, което всеки обект има
    );
}