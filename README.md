# efecto-parallax-gatoParacaidas
Voy a utilizar framer-motion con vite para hacer este efecto y practicarlo.

## Resumen de la práctica del gato con paracaidas

- useRef: Guarda referencias a elementos del DOM sin que afecten el renderizado.

- useScroll y useTransform: Permiten animar elementos mientras haces scroll.

- motion: Componente que hace que los elementos sean animados en función de valores dinámicos (como el scroll).

### Descripción de uso
Parte	Descripción
- `scrollYProgress`	Progreso del scroll (de 0 a 1)
- `[0, 1]`	Rango del progreso del scroll, desde el inicio (0) hasta el final (1)
- `['-40%', '40%']`	El rango de transformación en el eje Y para la propiedad y del gato, de -40% (arriba) a 40% (abajo)
Resultado: El gato se mueve desde el 40% por encima de su posición inicial hasta el 40% por debajo de su posición inicial conforme el usuario hace scroll.