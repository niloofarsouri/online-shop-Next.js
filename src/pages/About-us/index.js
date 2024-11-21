import style from '@/pages/About-us/index.module.css'
import Image from 'next/image';

// https://nextjs.org/docs/pages/api-reference/components/image



function About() {


    return (
        <>
            <section className={style.container}>
                <div className={style.main}>
                    <div className={style.main_image}>
                        {/* <img src="./img/IMG_6917.jpg" /> */}
                        <Image
                            src={'/img/IMG_6917.JPG'}
                            // src={me}
                            width={300}
                            height={400}
                            quality={100}
                            style={{ objectFit: 'cover' }}
                            // sizes="(max-width: 768px)"
                        />
                    </div>

                    <h1>Niloofar Souri</h1>
                </div>
            </section>
        </>
    )
}


export default About;