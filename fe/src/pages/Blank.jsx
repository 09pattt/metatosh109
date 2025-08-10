import { Link } from 'react-router-dom'
//import './stylesheet/Blank.css'
import styles from './stylesheet/Blank.module.css'

function Blank() {

    return (
        <div className={styles.page}>
            <main>
                <img src="./images/logo/metatosh-bw.png" class="w-[20%]"></img>
                <h2>Nothing here...</h2>
                <p>The specified page was not found.</p>
            </main>
            <footer>
                <p>Bring me back to <Link to='/'>Home</Link></p>
            </footer>
        </div>
    )

}

export default Blank;