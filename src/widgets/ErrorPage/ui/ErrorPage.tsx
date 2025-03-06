import { Button, ButtonTheme } from '@shared/ui/Button';
import styles from './ErrorPage.module.scss';

const ErrorPage = () => {

	const reloadPage = () => {
		location.reload();
	};

	return (
		<section className={styles['error-page']}>
			<h1>¡Ups, algo anda mal!</h1>
			<Button theme={ButtonTheme.WHITE} onClick={reloadPage} text={'Actualizar la página'} />
		</section>
	);
};

export { ErrorPage };
