import { SectionIntro } from '../SectionIntro/SectionIntro';
import { SectionConditions } from '../SectionConditions/SectionConditions';
import { SectionSteps } from '../SectionSteps/SectionSteps';
import { SectionPurpose } from '../SectionPurpose/SectionPurpose';
import { SectionReasons } from '../SectionReasons/SectionReasons';
import { SectionMoney } from '../SectionMoney/SectionMoney';
import { SectionReviews } from '../SectionReviews/SectionReviews';
import { SectionComment } from '../SectionComment/SectionComment';
import { SectionAdvantages } from '../SectionAdvantages/SectionAdvantages';
import { CTA, CTATheme } from '@widgets/CTA';

const PageHome = () => (
	<>
		<SectionIntro />
		<SectionConditions />
		<SectionSteps/>
		<CTA tags={{ top: ['SinEsperas', 'PréstamosRápidos', 'DineroUrgente'], bottom: ['MejoresTasas', 'Seguro'] }} />
		<SectionPurpose />
		<SectionReasons />
		<SectionMoney />
		<CTA
			theme={CTATheme.SECOND}
			tags={{
				top: ['FinanciamientoFácil', 'Transparente', 'RecíbeloHoy'],
				bottom: ['Cómodo', 'CréditoEnLínea', 'AprobaciónInmediata'],
			}}
		/>
		<SectionReviews />
		<SectionComment />
		<SectionAdvantages />
	</>
);

export default PageHome;