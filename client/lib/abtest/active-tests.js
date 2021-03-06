/** @format */
export default {
	nudgeAPalooza: {
		datestamp: '20180806',
		variations: {
			sidebarUpsells: 20,
			themesNudgesUpdates: 20,
			customPluginAndThemeLandingPages: 20,
			plansBannerUpsells: 20,
			control: 20,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	springSale30PercentOff: {
		datestamp: '20180413',
		variations: {
			upsell: 50,
			control: 50,
		},
		defaultVariation: 'control',
		allowExistingUsers: true,
	},
	signupAtomicStoreVsPressable: {
		datestamp: '20171101',
		variations: {
			atomic: 99,
			pressable: 1,
		},
		defaultVariation: 'atomic',
		allowExistingUsers: true,
		localeTargets: 'any',
	},
	businessPlanDescriptionAT: {
		datestamp: '20170605',
		variations: {
			original: 50,
			pluginsAndThemes: 50,
		},
		defaultVariation: 'original',
	},
	ATPromptOnCancel: {
		datestamp: '20170515',
		variations: {
			hide: 20,
			show: 80,
		},
		defaultVariation: 'hide',
		allowExistingUsers: true,
	},
	ATUpgradeOnCancel: {
		datestamp: '20170515',
		variations: {
			hide: 20,
			show: 80,
		},
		defaultVariation: 'hide',
		allowExistingUsers: true,
	},
	skipThemesSelectionModal: {
		datestamp: '20170904',
		variations: {
			skip: 50,
			show: 50,
		},
		defaultVariation: 'show',
		allowExistingUsers: true,
		localeTargets: 'any',
	},
	jetpackSignupGoogleTop: {
		datestamp: '20180427',
		variations: {
			original: 50,
			top: 50,
		},
		defaultVariation: 'original',
	},
	domainSuggestionKrakenV324: {
		datestamp: '20180820',
		variations: {
			domainsbot: 0,
			group_1: 21,
			group_3: 21,
			group_4: 21,
			group_6: 8, // dot with re-ordering
			group_7: 8, // dot
			group_8: 21,
		},
		defaultVariation: 'domainsbot',
	},
	aboutSuggestionMatches: {
		datestamp: '20180704',
		variations: {
			control: 50,
			enhancedSort: 50,
		},
		defaultVariation: 'control',
	},
	includeDotBlogSubdomainV2: {
		datestamp: '20180813',
		variations: {
			yes: 50,
			no: 50,
		},
		defaultVariation: 'no',
	},
	gSuiteDiscountV2: {
		datestamp: '20180822',
		variations: {
			control: 50,
			discount: 50,
		},
		defaultVariation: 'control',
	},
};
