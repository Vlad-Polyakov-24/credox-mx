import { classNames } from '@shared/lib/classNames';
import { Container } from '@shared/ui/Container';
import { SectionTitle } from '@shared/ui/SectionTitle';
import { Button, ButtonTheme, ButtonType } from '@shared/ui/Button';
import { moneyList } from '../../model/data/money.data';
import { Routes } from '@shared/config/routes';
import styles from './SectionMoney.module.scss';

type SectionMoneyProps = {
	className?: string;
};

const SectionMoney = ({ className }: SectionMoneyProps) => (
	<section className={classNames(styles.money, {}, [className])}>
		<Container className={styles.money__container}>
			<div className={classNames(styles.money__inner, {}, [styles.left])}>
				<SectionTitle title={'¿Qué cantidad de dinero necesitas?'} />
			</div>
			<div className={classNames(styles.money__inner, {}, [styles.right])}>
				<ul className={styles.money__list}>
					{moneyList.map(m => (
						<li key={m}>
							<Button as={ButtonType.LINK} to={Routes.CONTACTS} text={`$${m}`} fluid />
						</li>
					))}
				</ul>
				<Button
					as={ButtonType.LINK}
					to={Routes.CONTACTS}
					theme={ButtonTheme.OUTLINE}
					className={styles.money__button}
					text={'Envía tu solicitud'}
					fluid
				/>
			</div>
		</Container>
	</section>
);

export { SectionMoney };