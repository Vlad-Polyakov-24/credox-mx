import { Fragment } from 'react';
import { Modal } from '@shared/ui/Modal';
import { Button } from '@shared/ui/Button';
import { data } from '../model/data/conditionsModal.data';
import { ConditionsModalTheme } from '../model/types/ConditionsModal.types';
import styles from './ConditionsModal.module.scss';

type ConditionsModalProps = {
	isOpen: boolean;
	onClose: () => void;
	theme: ConditionsModalTheme;
};

const ConditionsModal = ({ isOpen, onClose, theme }: ConditionsModalProps) => {

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className={styles.content}>
				<h2 className={styles.content__title}>{data[theme].title}</h2>
				{data[theme].sections.map(({ title, content }, sectionIndex) => (
					<div key={sectionIndex} className={styles.content__inner}>
						{title && <h3 className={styles.content__h3}>{title}</h3>}
						{content.map(({ text, list }, contentIndex) => (
							<Fragment key={`content-${contentIndex}`}>
								<p className={styles.content__p}>{text}</p>
								{list && (
									<ul className={styles.content__list}>
										{list.map((item, itemIndex) => (
											<li key={itemIndex}>{item}</li>
										))}
									</ul>
								)}
							</Fragment>
						))}
					</div>
				))}
				<Button text={'Cerca'} className={'m-centred mt-16'} onClick={onClose} fluid shadow />
			</div>
		</Modal>
	);
};

export default ConditionsModal;