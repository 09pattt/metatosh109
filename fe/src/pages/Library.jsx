import NavBar from "../components/navBar";
import styles from "./stylesheet/Library.module.css";

function Library() {
    return (
        <>
            <NavBar />
            <p className={styles.hero_text}>Library</p>
            <p className={styles.sub_hero_text}>metatosh.dev/library</p>
        </>
    )
}

export default Library;