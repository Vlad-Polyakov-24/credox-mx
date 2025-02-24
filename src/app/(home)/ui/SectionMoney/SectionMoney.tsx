import { classNames } from '@shared/lib/classNames';
import styles from './SectionMoney.module.scss';

type SectionMoneyProps = {
	className?: string;
};

const SectionMoney = ({ className }: SectionMoneyProps) => (
	<section className={classNames(styles.money, {}, [className])}>
		<h2>section money</h2>
	</section>
);

export { SectionMoney };