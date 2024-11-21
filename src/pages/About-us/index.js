import style from '@/pages/About-us/index.module.css'
import Image from 'next/image';



function About() {


    return (
        <>
            <section className={style.container}>
                <div className={style.main}>
                    <div className={style.main_image}>
                        {/* <img src="./img/IMG_6917.jpg" /> */}
                        <Image
                            src={'/img/IMG_6917.JPG'}
                            width={100}
                            height={400}
                        />
                    </div>

                    <h1>Niloofar Souri</h1>
                </div>
            </section>
        </>
    )
}


export default About;