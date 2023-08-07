export default function Child(props){
    return(
       <table>
        <tr>
            <td>Enter {props.name}</td>
            <td>:</td>
            <td><input type="text"></input></td>
        </tr>
        <tr>
            <td>Enter {props.number}</td>
            <td>:</td>
            <td><input type="text"></input></td>
        </tr>
       </table>
    );
}
<Child name="Darshan" />