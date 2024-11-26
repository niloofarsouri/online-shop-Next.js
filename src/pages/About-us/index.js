import style from '@/pages/About-us/index.module.css'
import Image from 'next/image';

// https://nextjs.org/docs/pages/api-reference/components/image



function About() {


    return (
        <>
            <section className='d-none d-md-block'>
                <div className={style.container}>
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

                        <div className={style.name}>
                            <h2>Niloofar Souri</h2>
                        </div>
                    </div>
                </div>
            </section>


            <section className='d-block d-md-none mt-5 mb-5'>
                <div className={style.container_res}>
                    <div className={style.main_res}>
                        <div className={style.main_image_res}>
                            <Image
                                src={'/img/IMG_6917.JPG'}
                                width={150}
                                height={90}
                                quality={100}
                                style={{ objectFit: 'cover' }}
                                layout="responsive"
                            />
                        </div>

                        <div className={style.name_res}>
                            <h2>Niloofar Souri</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default About;