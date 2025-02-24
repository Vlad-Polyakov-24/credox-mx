import { SectionIntro } from '../SectionIntro/SectionIntro';
import { SectionConditions } from '../SectionConditions/SectionConditions';
import { SectionSteps } from '../SectionSteps/SectionSteps';
import { SectionPurpose } from '../SectionPurpose/SectionPurpose';
import { SectionReasons } from '../SectionReasons/SectionReasons';
import { SectionMoney } from '../SectionMoney/SectionMoney';
import { SectionReviews } from '../SectionReviews/SectionReviews';
import { SectionComment } from '../SectionComment/SectionComment';
import { SectionAdvantages } from '../SectionAdvantages/SectionAdvantages';

const PageHome = () => (
	<>
		<SectionIntro />
		<SectionConditions />
		<SectionSteps />
		<SectionPurpose />
		<SectionReasons />
		<SectionMoney />
		<SectionReviews />
		<SectionComment />
		<SectionAdvantages />
	</>
);

export default PageHome;