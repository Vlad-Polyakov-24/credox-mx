import { CTATheme } from '../types/CTA.types';
import Img_01 from '@shared/assets/images/cta/img_01.png';
import Img_02 from '@shared/assets/images/cta/img_02.png';
import Img_01_bg from '@shared/assets/images/cta/img_01_bg.png';
import Img_02_bg from '@shared/assets/images/cta/img_02_bg.png';

export const data = {
	[CTATheme.FIRST]: {
		title: <>¡<span className={'color-blue-primary'}>Olvídate</span> de completar formularios sin fin en diferentes sitios web!</>,
		subtitle: 'Nuestro servicio te ayudará a encontrar en solo unos minutos a muchos prestamistas dispuestos a otorgarte un préstamo sin importar tu historial crediticio.',
		img: Img_01,
		img_bg: Img_01_bg,
	},
	[CTATheme.SECOND]: {
		title: <>¿Listo para conseguir el <span className={'color-blue-primary'}>mejor</span> préstamo en línea?</>,
		subtitle: 'Rellena el formulario y obtén la aprobación en solo 5 minutos.',
		img: Img_02,
		img_bg: Img_02_bg,
	},
};