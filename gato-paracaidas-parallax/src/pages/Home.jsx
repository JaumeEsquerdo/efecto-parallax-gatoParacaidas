import { motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react';
import cielo from '../assets/imgs/cielo.jpg';
import jardin from '../assets/imgs/jardin.jpg';
import gato from '../assets/imgs/cat.gif';


const Home = () => {
    const containerRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'] // la ref start empieza a contar el scroll en el start y llega a 1 cuando toca el final del viewport

    });
    

    // movimiento lento para el cielo
    const cieloY = useTransform(scrollYProgress, [0,1], ['0%', '20%']);
    // movimiento medio para el jardin (mas aproximado que el cielo)
    const jardinY = useTransform(scrollYProgress, [0,1], ['100%', '40%'])
    // movimiento del gato (arriba a abajo)
    const gatoY = useTransform(scrollYProgress, [0,1], ['-80%', '80%'])
    const cieloOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]); // Cielo menos visible mientras avanzas


    return (
        <>
        <div ref={containerRef} style={{height:'130vh', position:'relative', overflow:'hidden'}}>
        <motion.img 
            src={cielo}
            alt='cielo'
            style={{
                position: 'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100vh',
                objectFit:'cover',
                y: cieloY,
                zIndex:1,
                opacity: cieloOpacity,
            }}
            
            
            />
            <motion.img 
            src={jardin}
            alt='jardin'
            style={{
                position: 'absolute',
                top:0,
                left:0,
                width:'100%',
                height:'100vh',
                objectFit:'cover',
                y: jardinY,
                zIndex:2
            }}
            />
            
            <motion.img 
            src={gato}
            alt='gato'
            style={{
                position: 'absolute',
                top:'35%',
                left:'20%',
                transform:'translateX(-50%)',
                width:'250px',
                y: gatoY,
                zIndex:3
            }}
            transition={{ type: 'spring', stiffness: 50, damping: 20 }}

            
            
            />
            
            
        </div>
        
        </>
    );
}

export default Home;