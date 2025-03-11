import type { ReactNode } from 'react';
import { ConditionsModalTheme } from '../types/ConditionsModal.types';

interface IContent {
	title: string;
	sections: {
		title?: string;
		content: {
			text: ReactNode | string;
			list?: string[];
		}[];
	}[];
}

export const data: Record<ConditionsModalTheme, IContent> = {
	[ConditionsModalTheme.CONDITIONS]: {
		title: 'Términos & Condiciones',
		sections: [
			{
				title: 'Introducción',
				content: [
					{
						text: (
							<>
								Esta página web (en adelante “Web”) es propiedad de <span className={'fw-700'}>Credox</span> (N° de registro: 14523902, con domicilio: <span className={'fw-700'}>calle Randvere tee 9, Haabneeme, 74001, EE</span>).<br />
								<br />
								Si usted utiliza nuestros servicios y proporciona su información personal, usted acepta y se compromete a cumplir todas las Condiciones mencionadas adelante. Por favor, lea nuestros Términos y Condiciones.<br />
								<br />
								Nos reservamos el derecho a cambiar estos Términos y Condiciones en cualquier momento sin previo aviso. Usted es el único responsable y se compromete a revisar periódicamente los Términos y Condiciones de esta Web.<br />
								<br />
								Todos los servicios de <span className={'fw-700'}>Credox</span> están sujetos a las presentes Términos y Condiciones del uso de la Web.
							</>
						),
					}
				],
			},
			{
				title: 'El fin de nuestra web',
				content: [
					{
						text: (
							<>
								El fin de esta Web es recopilar las ofertas de préstamos online, dar información sobre las ofertas del mercado y elegir la mejor oferta para Usted. El uso de esta Web (<a href={'https://crezu.mx/'}>www.crezu.mx</a>) es gratuito. Los proveedores de préstamos pagan a <span className={'fw-700'}>Credox</span> por el servicio de envío de solicitudes y datos de clientes.<br />
								<br />
								La Web no proporciona préstamos sino recopila y compara las ofertas de terceros.<br />
								<br />
								La Web muestra los enlaces desde esta Web a sitios web de terceros únicamente con fines informativos. No nos hacemos responsables de su contenido, ya que no comprobamos estos sitios web y ellos no pertenecen a nosotros.<br />
								<br />
								<span className={'fw-700'}>Credox</span> también recopila todos los datos relativos de usted y los proporciona a los proveedores de préstamos de Crezu vía API para encontrar la mejor oferta para usted. <span className={'fw-700'}>Credox</span> no es capaz de reenviar información crediticia sobre usted y sobre el préstamo que desea recibir, a menos que rellene todas las casillas del formulario de la solicitud y clique el botón.
							</>
						),
					},
				],
			},
			{
				title: 'Condiciones de uso',
				content: [
					{
						text: (
							<>
								Los usuarios de la Web sólo pueden ser personas mayores de 18 años. Los menores de 18 años no pueden usar nuestros servicios y por lo tanto no están autorizados a enviarnos sus datos personales.<br />
								<br />
								Usted es el único responsable del uso de la Web. Proporcionando su información personal en esta Web usted acepta que esta información no será confidencial.<br />
								<br />
								Sus datos y datos relativos al crédito que desea recibir pueden ser compartidos con las empresas financieras de terceros. La entrega de tal información facilitará a los proveedores de préstamos tomar la decisión adecuada sobre concederlo, y en tal caso, los términos y condiciones.
							</>
						),
					},
				],
			},
			{
				title: 'Legislación aplicable',
				content: [
					{
						text: 'Los presentes Términos y Condiciones se someterán a las leyes en vigor en los Estados Unidos Mexicanos.',
					},
				],
			},
			{
				title: 'Limitación de la responsabilidad',
				content: [
					{
						text: (
							<>
								La Web puede contener los enlaces de terceros, pero no garantiza ni asume responsabilidad en cuanto a la exactitud y la actualidad del contenido de la información de terceros en la Web y no se responsabiliza de los daños derivados del uso de su contenido. En cualquier momento, sin notificación previa y sin justificación, <span className={'fw-700'}>Credox</span> puede dar por terminada la prestación de sus servicios.<br />
								<br />
								Nosotros no garantizamos que esta Web funcione ininterrumpidamente o esté libre de errores.<br />
								<br />
								<span className={'fw-700'}>Credox</span> no asume ninguna responsabilidad acerca de las decisiones del usuario, tomadas basándose en la información presentada en la Web. No nos responsabilizamos de cualquier daño que puede causar el uso de la información exhibida en la Web.<br />
								<br />
								<span className={'fw-700'}>Credox</span> no asume ninguna responsabilidad por las decisiones tomadas por un proveedor de préstamo a la base de la información enviada por Crezu a los proveedores de préstamos.
							</>
						),
					},
				],
			},
			{
				title: 'Protección de datos',
				content: [
					{
						text: (
							<>
								<span className={'fw-700'}>Credox</span> se compromete a tratar con la máxima privacidad, seguridad y confidencialidad toda aquella información facilitada libremente por el usuario a través de los formularios existentes en la página web.<br />
								<br />
								La base del procesamiento de los datos personales queda prevista en el artículo 6 (1) (b) del Reglamento General de la Protección de Datos.<br />
								<br />
								El usuario es el único responsable de la veracidad de los datos facilitados a la Web. El usuario se compromete a no introducir datos falsos. En caso de que un usuario introduzca datos falsos o relativos a otra persona sin su consentimiento, la Web no se hace responsable del tratamiento de los mismos.<br />
								<br />
								Al aceptar las condiciones legales de la Web, usted queda informado y autoriza que los datos completados en los formularios de la Web puedan ser cedidos a empresas que ofrecen micropréstamos y por tanto tratar sus datos con la finalidad de poder tramitar el préstamo solicitado por usted.<br />
								<br />
								Usted puede retirar en todo momento el consentimiento prestado para el envío de comunicaciones comerciales y/o publicidad.
							</>
						),
					},
				],
			},
		],
	},
	[ConditionsModalTheme.PRIVACY]: {
		title: 'Política de privacidad',
		sections: [
			{
				title: 'Introducción',
				content: [
					{
						text: (
							<>
								<span className={'fw-700'}>En Credox nos tomamos muy en serio su privacidad y la seguridad de su información personal.</span> Por ello, mediante este documento hemos tratado de describir del modo más sencillo posible cómo recolectamos y tratamos su información.<br/>
								<br/>
								Esta política de privacidad describe como <span className={'fw-700'}>Credox</span> (en adelante, “<span className={'fw-700'}>Credox</span>” o “Nosotros”, N° de registro: 14523902 y con domicilio: <span className={'fw-700'}>calle Mere pst 10, Tallinn, 10111, EE</span>) trata los datos de carácter personal de sus usuarios (en adelante, “Usted”) en relación con el uso de su sitio web <span className={'fw-700'}>credox.net</span> (en adelante, el “Sitio Web” o <span className={'fw-700'}>Credox</span>) y de los Servicios ofrecidos por <span className={'fw-700'}>Credox</span>.<br/>
								<br/>
								Este documento está adaptado al Reglamento Europeo de Protección de Datos (RGPD).<br/>
								<br/>
								Este documento contiene las menciones o referencias legales que servirán para regular las condiciones en las que el sitio o página web recoge, gestiona y retiene (“trata”) los datos personales de los usuarios de Internet que acceden, navegan y utilizan el sitio o página web. También comprende los derechos de los usuarios y las obligaciones del titular del sitio web en relación con el tratamiento de los datos personales.
							</>
						),
					},
				],
			},
			{
				title: 'El fin de presente política de privacidad',
				content: [
					{
						text: (
							<>
								El fin de presente política de privacidad es explicar cómo <span className={'fw-700'}>Credox</span> recolecta, usa y comparte sus datos de carácter personal y qué derechos tiene respecto de sus datos.
							</>
						),
					},
				],
			},
			{
				title: '¿Quién es el responsable del tratamiento de sus datos?',
				content: [
					{
						text: (
							<>
								El responsable es la compañía <span className={'fw-700'}>Credox</span>. N° de registro: 14523902 y con domicilio: <span className={'fw-700'}>calle Mere pst 10, Tallinn, 10111, EE</span>.
							</>
						),
					},
				],
			},
			{
				title: '¿Qué datos recopilamos y cuándo?',
				content: [
					{
						text: 'Fuentes de las que proceden los datos personales:',
						list: [
							'Cuando Usted nos los proporcione directamente a través de los formularios de nuestro Sitio Web (e.g. al completar una solicitud de préstamo o de cualquier otra manera);',
							'De páginas web de terceros que se dedican a la generación de oportunidades en relación a la prestación de servicios, entre ellos, los ofrecidos por Credox;',
							'Fuentes accesibles al público (e.g. los perfiles públicos de redes sociales tales como Facebook o LinkedIn);',
							'De manera automática mediante el uso de herramientas informáticas (e.g. información relativa a su comportamiento en nuestro Sitio Web obtenida a través de la herramienta Yandex Metrika).',
						],
					},
				],
			},
			{
				title: '¿Con qué finalidad tratamos sus datos personales?',
				content: [
					{
						text: (
							<>
								Las finalidades principales para las que utilizamos sus datos son para ayudarle encontrar un préstamo y administrar su cuenta de cliente. Esto incluye el envío de los datos personales a los proveedores de préstamo para encontrar un Prestamista adecuado, tal y como lo solicite, que se adapte a sus necesidades, así como pre-completar la solicitud de préstamo en caso de que la misma se repitiese, y la mejora de su perfil crediticio y scoring si ya tuviese una Cuenta.<br/>
								<br/>
								Tratamos los datos generados en la utilización de nuestro Sitio Web y de los Servicios (e.g. información sobre cómo navega y utiliza nuestro Sitio Web) para mejorar la experiencia de usuario en la utilización del Sitio Web y los Servicios, con el objetivo de hacerlo más intuitivo. La base legal de lo anterior reside en nuestro interés legítimo de negocio para mejorar el Sitio Web y la experiencia del usuario. Teniendo en cuenta la naturaleza de los datos y que los usamos de forma agregada, así como sus intereses o derechos fundamentales y libertades, éstos no anulan nuestros intereses legítimos.<br/>
								<br/>
								Asimismo, tratamos los datos recibidos de uso que hace de nuestro Sitio Web y nuestros Servicios (e.g. información sobre cómo navega y utiliza nuestro Sitio Web) con el objetivo de prevenir el fraude y el uso indebido de nuestros Servicios (e.g. evitar la utilización del Sitio Web y los Servicios por robots). La base legal de lo anterior reside en nuestro interés legítimo de negocio para mejorar el Sitio Web y la experiencia del usuario. Teniendo en cuenta la naturaleza de los datos y que los usamos de forma agregada, así como sus intereses o derechos fundamentales y libertades, éstos no anulan nuestros intereses legítimos.<br/>
								<br/>
								En la medida en que se exija por la normativa aplicable en materia de protección de datos, Usted tiene derecho a formular objeciones para el tratamiento de sus datos personales sobre la base de un interés legítimo.<br/>
								<br/>
								Además, siempre que lo autorice, podremos comunicar sus datos personales a terceros, de modo que podrán enviarle comunicaciones comerciales sobre sus productos o servicios.<br/>
								<br/>
								Cuando el procesamiento de datos de carácter personal se base en su consentimiento, éste se podrá retirar en cualquier momento pinchando en el link de “unsubscribe from the list” / “darse de baja” que se encuentra al final de cada uno de los e-mails. Tenga en cuenta que la retirada del consentimiento no afecta a legalidad del procesamiento de datos realizado con anterioridad a dicha retirada.<br/>
								<br/>
								También podremos procesar sus datos de carácter personal para dar cumplimiento a nuestras obligaciones legales (e.g. en nuestra obligación de compartir sus datos personales con las autoridades pertinentes y para cumplir con nuestras obligaciones en materia de Prevención de Blanqueo de Capitales y Financiación al Terrorismo). Este tipo de procesamiento se fundamenta en el cumplimiento de nuestras obligaciones legales de información.
							</>
						),
					},
				],
			},
			{
				title: '¿Qué es la toma de decisiones automatizada?',
				content: [
					{
						text: (
							<>
								Toma de decisiones automatizada como parte de nuestros Servicio: teniendo en cuenta sus preferencias para contratar un préstamo con nosotros y la información personal que Usted nos ha proporcionado completando el formulario de solicitud de préstamo, la información obtenida de las fuentes anteriormente enumeradas, y su historial de uso de nuestros Servicios (e.g. si le han otorgado un préstamo y quién se lo ha otorgado), elaboramos o completamos su perfil crediticio y “scoring” asignando posteriormente los resultados obtenidos a su Cuenta. Comparamos su perfil con las condiciones establecidas por cada uno de los Prestamistas para sus clientes, y teniendo en cuenta los resultados de esta comparación le ofrecemos el Prestamista o la relación de Prestamistas con los que más posibilidades tiene de que efectivamente le otorguen el préstamo, en las condiciones que ha pre-seleccionado. Nuestros resultados se basan en la información que hemos recibido de los Prestamistas en relación con las condiciones que ofrecen a sus clientes, así como en nuestra mejor estimación sobre las conductas previas mantenidas por los Prestamistas. Como resultado de nuestra comparación, la lista de potenciales Prestamistas puede ser muy numerosa o por el contrario contener uno o ningún potencial Prestamista, esto depende de cuantos Prestamistas, de acuerdo con nuestra mejor estimación, estarían dispuestos a otorgar préstamos a personas con perfiles similares al suyo. Para comprender en que se basan las preferencias de cada uno de los Prestamistas por favor consulten las políticas de privacidad de los Prestamistas.<br/>
								<br/>
								No se puede considerar que los resultados de nuestros perfiles le afecten sus posibilidades de obtener un préstamo. Tiene derecho a obtener intervención humana, a expresar su punto de vista y a impugnar la decisión.
							</>
						),
					},
				],
			},
			{
				title: '¿Quién tiene acceso a los datos personales? ¿Cuál es política del intercambio de sus datos personales?',
				content: [
					{
						text: (
							<>
								Solo compartimos sus datos de carácter personal cuando tenemos una razón válida para ello y cuando dicho intercambio esté legalmente amparado.<br/>
								<br/>
								Solo contratamos con proveedores de servicios que brindan garantías suficientes para implementar las medidas de seguridad técnicas y organizativas adecuadas para proteger sus datos personales.<br/>
								<br/>
								Crezu transfiere los datos personales recopilados por él mismo a los destinatarios pertenecientes a las siguientes categorías:
							</>
						),
						list: [
							'Proveedores de préstamo.',
						],
					},
					{
						text: 'La prestación de nuestros Servicios incluye compartir sus datos personales con los Prestamistas para que decidan si pueden otorgarle o no un préstamo y para suscribir el contrato de préstamo. El propósito y la base legal de dicho intercambio de datos personales es poder llevar a cabo el Acuerdo existente entre nosotros y la correcta prestación de nuestros Servicios. El Prestamista usará sus datos personales con el único propósito de decidir si le otorga o no un préstamo. Sin embargo, tenga en cuenta que una vez que hayamos transferido sus datos personales al Prestamista para que pueda evaluar la posibilidad de concederle o no un préstamo, el Prestamista será el único responsable del tratamiento de sus datos personales. Por lo que debería familiarizarse con sus correspondientes políticas de privacidad. En caso de que el Prestamista decide no otorgarle un préstamo, deberá eliminar o anonimizar sus datos personales, a menos que exista una base legal válida para retenerlos.',
						list: [
							'Proveedores de correo electrónico;',
							'Proveedores de servicios SMS;',
							'Proveedores de análisis;',
							'IT y marketing que procesan datos personales en los mismos servidores donde Crezu almacena datos personales pueden tener acceso a estos datos personales;',
							'Auditores, autoridades (Las bases legales de este intercambio residen en la necesidad de cumplir con nuestras obligaciones legales).',
						],
					},
					{
						text: 'En caso de que necesite información detallada en relación con los proveedores de servicios relacionados con el tratamiento de sus datos de carácter personal por favor póngase en contacto con nosotros en la información de contacto.',
					},
				],
			},
			{
				title: '¿Сuánto tiempo guardamos sus datos personales?',
				content: [
					{
						text: (
							<>
								Conservamos sus datos de carácter personal durante el tiempo necesario para poder cumplir con el propósito con el que fueron entregados, así como durante el tiempo necesario para proteger sus derechos tal y como se exige en la normativa aplicable. Podremos conservar sus datos personales durante determinados años tras la finalización de nuestra relación en caso de que sea necesario de cara a proteger sus derechos de conformidad con lo establecido en la normativa aplicable. En el caso de que existan diferentes finalidades que den lugar al tratamiento de sus datos de carácter personal se conservarán conforme al plazo de mayor duración.<br/>
								<br/>
								De conformidad con el período máximo de prescripción para reclamaciones derivadas de estas operaciones, en virtud de la legislación aplicable, cuando la persona obligada incumpla intencionalmente sus obligaciones, podremos conservar sus datos personales relacionados con dichas reclamaciones durante un máximo de 10 años a partir de la fecha de vencimiento de la reclamación.
							</>
						),
					},
				],
			},
			{
				title: 'Sus derechos',
				content: [
					{
						text: 'Tal y como establece la normativa aplicable, Usted tiene todos los derechos reglamentariamente establecidos respecto de sus datos personales. Dichos derechos incluyen, entre otros, los siguientes:',
						list: [
							'Solicitar acceso a sus datos personales;',
							'Obtener una copia de sus datos personales;',
							'Rectificar o completar datos incorrectos o imprecisos;',
							'Suprimir datos personales;',
							'Restringir el tratamiento de sus datos personales;',
							'Migración de sus datos personales;',
							'Oponerse al procesamiento de los datos personales, que se basa en el nuestro interés legítimo y en el tratamiento de datos personales con fines de marketing directo;',
							'proporcionar a Crezu datos adicionales para que se completen los datos personales incompletos relacionados con el interesado de datos;',
							'presentar una queja ante una autoridad supervisora.',
						],
					},
					{
						text: (
							<>
								Tenga en cuenta que los derechos relacionados con sus datos personales no son absolutos y que estarán sujetos a las consideraciones permitidas por la ley aplicable.<br/>
								<br/>
								Para ejercer sus derechos, por favor póngase en contacto con nosotros en la información de contacto.<br/>
								<br/>
								Si considera que los derechos en relación con sus datos personales han sido infringidos, le pedimos que por favor póngase en contacto con nosotros en la información de contacto.<br/>
								<br/>
								En caso de que nuestras prácticas de tratamiento de datos de carácter personal cambien o de que sea necesario modificar esta Política de Privacidad según lo establecido en la ley aplicable, la jurisprudencia o las directrices emitidas por las autoridades competentes, tenemos derecho a modificar unilateralmente esta Política de Privacidad en cualquier momento. En caso de que los cambios sean importantes y le repercutan de alguna manera se lo notificaremos por correo electrónico y les saltará un pop-up (ventana emergente) en nuestro Sitio Web con anterioridad a que dichas modificaciones entren en vigor.
							</>
						),
					},
				],
			},
			{
				title: 'Contacta con nosotros',
				content: [
					{
						text: (
							<>
								En caso de que tenga alguna pregunta en relación con el tratamiento de sus datos personales por parte nuestra o si desea ejercer alguno de sus derechos, puede ponerse en contacto con nosotros a través de los siguientes datos de contacto: <a href={'mailto:contacto@credox.mx'}>contacto@credox.mx</a><br/>
								<br/>
								<span className={'fw-700'}>Credox</span> responderá a la solicitud sin demora indebida y, en cualquier caso, en el plazo de un mes a partir de la recepción de la solicitud (ese período puede, teniendo en cuenta las circunstancias, prorrogarse dos meses). El tiempo de respuesta dependerá de la cantidad de solicitudes que reciba <span className={'fw-700'}>Credox</span> y del contenido de una solicitud en particular.<br/>
								<br/>
								<span className={'fw-700'}>Política de Privacidad válida a partir del 20 de Septiembre de 2018.</span>
							</>
						),
					},
				],
			},
			{
				title: 'Darse de baja',
				content: [
					{
						text: (
							<>
								Si quiere darse de baja de toda nuestra publicidad, por favor escriba a <a href={'mailto:darsedebaja@credox.mx'}>darsedebaja@credox.mx</a>
							</>
						),
					},
				],
			},
		],
	},
	[ConditionsModalTheme.COOKIE]: {
		title: 'Aviso de uso de cookies',
		sections: [
			{
				content: [
					{
						text: 'Este sitio web utiliza cookies propias y de terceros para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido y la publicidad. Al continuar navegando, aceptas el uso de cookies. Para más información, consulta nuestra Política de Cookies.',
					},
				],
			},
		],
	},
};