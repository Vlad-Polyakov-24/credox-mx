'use client';

import { Button, ButtonTheme } from '@shared/ui/Button';

const Error = ({ reset }: { reset: () => void }) => (
	<div className={'not-found-page'}>
		<h1>¡Ups, algo anda mal!</h1>
		<Button theme={ButtonTheme.WHITE} onClick={reset} text={'Actualizar la página'} />
	</div>
);

export default Error;