import style from '@/pages/About-us/index.module.css'
import Image from 'next/image';

// https://nextjs.org/docs/pages/api-reference/components/image



function About() {


    return (
        <>
            <section className={style.container}>
                <div className={style.main}>
                    <div className={style.main_image}>
                        <Image
                            src={'/img/IMG_6917.JPG'}
                            width={300}
                            height={400}
                            quality={100}
                            style={{ objectFit: 'cover' }}
                            layout="responsive"
                        />
                    </div>

                    <h2>Niloofar Souri</h2>
                </div>
            </section>
        </>
    )
}


export default About;