import NavBar from '../components/navBar.jsx'
import styles from './stylesheet/Home.module.css'

function Home() {

    return (
        <div className={`${styles.pageLocalRoot} ${styles.space}`}>
            <NavBar />
            <main className={styles.main1}>
                <div className={styles.heroSection}>
                    <div className={styles.titleBlock}>
                        <div>
                            <p className={styles.title1}>Stage Sound Controller</p>
                            <p className={styles.subtitle1}>metatosh109 : Pat's mission control</p>
                        </div>
                    </div>
                    <div className={styles.desBlock}>
                        <p className={styles.des1}>Software ตัวนี้หลังจากให้ JavaScript runtime สั่ง Vite framework ให้เริ่ม host บน Command Line หรือ Terminal แล้วจะเข้าถึงหน้าควบคุมได้บนบราวเซอร์ในเครื่องด้วย URL: http://localhost:5173 ในกรณีทั่วไป บน path เริ่มต้นหรือหน้าแรกเมื่อคลิ๊กที่ Block ต่างๆจะมีเสียงแต่ละแบบออกมา โดย SFX สามารถเล่น Element เดียวกันขณะที่อันก่อนหน้ายังไม่สิ้นสุดได้ ยกเว้นบางเสียงที่ยาวกว่าเพื่อนจะเป็นการเล่นและหยุดแทน การใช้เครื่องพัด (localhost) เปิดจะได้ประสิทธิภาพสูงสุด เพราะ ใช้งานโดยไม่ต้อง Load ผ่านเครือข่าย ได้คุณภาพเสียงสูงโดยมีความหน่วงน้อยที่สุด</p>
                        <p className={styles.des1}>ขณะใช้ระวังอย่าสั่งปิด (Terminate) โปรแกรม JavaScript runtime และห้ามปิดเครื่องเด็ดขาด! ถ้าปิดแท็บไปให้พิมพ์ localhost:5173 บน Safari หรือ Firefox จะกลับมาหน้าหลักอีกครั้ง หากพบเจอปัญหาใดๆให้ลอง Reload หน้าเว็บด้วยคีย์ Command + R หรือคลิ๊กปุ่ม Reload หากยังคงพบปัญหาให้รีบแจ้งห้ามแก้ไขด้วยตนเองเด็ดขาด</p>
                        <p className={styles.desFooter}>Software จัดทำโดยณภัทรเองน่ะ เท่ไหมๆ คอมโพเน้นที่ดึงมาใช้ก็ของเราเองด้วยแหละ :P </p>
                        <p className={styles.desFooter}>เข้าชมโค้ดและข้อมูลใน Git Repository ได้ที่ https://github.com/09pattt/metatosh109</p>
                        <p className={styles.license}>MIT License | Copyright © 2025 Mr.Napat Tosawat</p>
                    </div>
                </div>

                <div className={styles.title}>
                    <p className={styles.title1}>Sound effects</p>
                    <p className={styles.subtitle1}>คลิ๊กที่แต่ละ Block เพื่อเล่นเสียงนั้นๆ เสียงจะเป็นตามชื่อ Block</p>
                </div>

                <div className={styles.media_pool}>
                    <div className={styles.mediaBlock}><div style={{backgroundImage: `url(/images/cover/Rifle.png)`,}}>ปืนกล ตับๆๆ</div></div>
                    <div className={styles.mediaBlock}><div style={{backgroundImage: `url(/images/cover/lukMo.png)`,}}>ปืนลูกโม่ ปั้ง!</div></div>
                    <div className={styles.mediaBlock}><div style={{backgroundImage: `url(/images/cover/drum.png)`,}}>กลอง แต๊ก</div></div>
                    <div className={styles.mediaBlock}><div style={{backgroundImage: `url(/images/cover/correct.png)`,}}>ถูก ปิ๊งป่อง</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                    <div className={styles.mediaBlock}><div>Null</div></div>
                </div>

                <div className={styles.title}>
                    <p className={styles.title1}>Audio</p>
                    <p className={styles.subtitle1}>เล่นเสียงโดยใช้ Pointer ควบคุมการเล่น</p>
                </div>

                <div className={styles.audio_media_pool}>
                    <div className={styles.audio_media_block}><div>โกโกวา</div></div>
                    <div className={styles.audio_media_block}><div>เสียงโกโกวาแสกน</div></div>
                    <div className={styles.audio_media_block}><div><audio></audio></div></div>
                    <div className={styles.audio_media_block}><div>Null</div></div>
                    <div className={styles.audio_media_block}><div>Null</div></div>
                </div>

                <div className={styles.title}>
                    <p className={styles.title1}>Backdrop song</p>
                    <p className={styles.subtitle1}>เล่นเพลง Background ตามฉากหรือช่วงต่างๆ</p>
                </div>

                <div className={styles.song_media_pool}>
                    <div className={styles.song_media_block}><div>Null</div></div>
                    <div className={styles.song_media_block}><div>Null</div></div>
                    <div className={styles.song_media_block}><div>Null</div></div>
                    <div className={styles.song_media_block}><div>Null</div></div>
                </div>
            </main>
        </div>
    )

}

export default Home;