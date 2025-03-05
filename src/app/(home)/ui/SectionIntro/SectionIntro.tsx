import Image from 'next/image';
import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Calculator } from '@widgets/Calculator';
import styles from './SectionIntro.module.scss';
import IntroImg from '@shared/assets/images/intro/img_01.png';

type SectionIntroProps = {
	className?: string;
};

const SectionIntro = ({ className }: SectionIntroProps) => (
	<section className={classNames(styles.intro, {}, [className])}>
		<Container className={styles.intro__container}>
			<div className={classNames(styles.intro__inner, {}, [styles.left])}>
				<h1 className={'h1'}>
					<span className={'color-blue-primary font-italic'}>Soluciones</span> de crédito al instante
				</h1>
				<Image
					className={styles.intro__image}
					src={IntroImg}
					alt={'intro img'}
					priority
				/>
			</div>
			<div className={classNames(styles.intro__inner, {}, [styles.right])}>
				<Calculator />
				<div className={styles.intro__desc}>
					<p className={styles.text}>
						Nuestro servicio monitoriza en tiempo real una base de prestamistas comprobados. Сredox.mx ofrece créditos
						flexibles con plazos de devolución entre 61 y 90 días, con una TAE mínima del 0% y máxima del 36%. Por
						ejemplo, para un préstamo de $1000 a devolver en 67 días, no habrá costos adicionales y el importe total a
						devolver será de $1000 con una TAE de 0%.
					</p>
				</div>
			</div>
		</Container>
	</section>
);

export { SectionIntro };