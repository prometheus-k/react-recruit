import World from "./World";
import styles from "./Welcome.module.css"

export default function Welcome() {
    return (
        <div>
        <h1 style={{ 
            color: '#00ff00'   ,
            borderRight: "12px solid #000",
            marginBottom: "50px",
            opacity: 1
        }}>Welcome</h1>
        <div className={styles.box}>Welcome</div>
        </div>
    );
}