import { useState } from "react";
import UserName from "./UserName";

export default function World(props) {
    console.log(props);
    // let name = "Mike";
    const[name, setName] = useState('Mike');
    const[age, setAge] = useState(props.age);
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다."

    function changeName(){
        setName(name === "Mike" ? "Jane" : "Mike");
    }
    return (
        <div>
            <h3>World</h3>
            <h2 id="name">{name}({age}) : {msg}</h2>
            <UserName name={name}></UserName>
            <button onClick={()=>{
                setName(name === "Mike" ? "Jane" : "Mike");
                setAge(age + 1);
            }}>Change</button>
        </div>    
    );
}