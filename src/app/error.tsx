'use client';

import { Button, ButtonTheme } from '@shared/ui/Button';

const Error = ({ reset }: { reset: () => void }) => (
	<div className={'not-found-page'}>
		<h1>Ooops, something wrong!</h1>
		<Button theme={ButtonTheme.WHITE} onClick={reset} text={'Refresh the page'} />
	</div>
);

export default Error;