export default function Hello() {

    function showName(){
        console.log("Mike");
      }
    function showAge(age){
        console.log(age);
    }
    function showText(text){
    console.log(text);
    }
      
    return (
        < div>
        <h1>Hello</h1>
        <button onClick={showName}>Show name</button>
        <button onClick={()=>{
                showAge(10);
            }
        }>SHow age</button>
        <input type="text" onChange={(e)=>{
            const txt = e.target.value;
            showText(txt);
        }}></input>
        </div>
       
    ); 
}