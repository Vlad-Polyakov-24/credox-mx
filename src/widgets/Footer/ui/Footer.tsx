import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { Logo } from '@shared/ui/Logo';
import styles from './Footer.module.scss';

type FooterProps = {
	className?: string;
};

const Footer = ({ className }: FooterProps) => (
	<footer className={classNames(styles.footer, {}, [className])}>
		<Container>
			<Logo/>
			<div className={styles.footer__inner}>
				<p className={styles.text}>
					Credox.mx una compañia de marca comercial Fininity Ltd (número de registro: 14523902, dirección: Paadi tee 3,
					Haabneeme, 74001 Harju maakond, EE.).Escogemos préstamos para cualquier objetivo. 24 horas al día, 7 días a la
					semana. El periodo mínimo de liquidación de la deuda es de 61 días y el máximo de 90 días. CAT mínima es de 0%
					y la máxima es de 36%. Por ejemplo, para un préstamo de 1000$ a devolver en 67 días, los costos serán de $0
					pesos, el importe total a devolver será de 1000$ con una CAT de 0%. Los intereses varían según el prestamista,
					el interés propuesto dependerá de tus circunstancias e historial crediticio. La página actual no es una
					entidad financiera, un banco o un prestamista. El servicio Credox.mx escoge préstamos para clientes haciendo
					de intermediario entre los clientes que quieren recibir un préstamo y las instituciones financieras
					licenciadas. El servicio no se hace responsable de los acuerdos crediticios. La página actual no cobra por el
					servicio ni tampoco se hace responsable de las acciones, incumplimientos o tasas de interés de cualquier
					prestamista. No estás obligado a usar los servicios de Credox.mx ni contactar o solicitar un préstamo a los
					prestamistas que aparecen en esta página.
				</p>
				<p className={classNames(styles.text, {}, ['fw-500'])}>&copy; 2025 Credox.mx</p>
			</div>
		</Container>
	</footer>
);

export default Footer;