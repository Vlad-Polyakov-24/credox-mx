import { Button, ButtonTheme, ButtonType } from '@shared/ui/Button';

const NotFound = () => (
	<div className={'not-found-page'}>
		<h1>Página no encontrada</h1>
		<Button as={ButtonType.LINK} theme={ButtonTheme.WHITE}>Ir a la página de inicio</Button>
	</div>
);

export default NotFound;