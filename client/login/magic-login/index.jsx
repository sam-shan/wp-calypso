/** @format */

/**
 * External dependencies
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';
import page from 'page';

/**
 * Internal dependencies
 */
import notices from 'notices';
import { login } from 'lib/paths';
import { CHECK_YOUR_EMAIL_PAGE } from 'state/login/magic-login/constants';
import getCurrentLocaleSlug from 'state/selectors/get-current-locale-slug';
import getMagicLoginCurrentView from 'state/selectors/get-magic-login-current-view';
import { hideMagicLoginRequestForm } from 'state/login/magic-login/actions';
import LocaleSuggestions from 'components/locale-suggestions';
import {
	recordTracksEventWithClientId as recordTracksEvent,
	recordPageViewWithClientId as recordPageView,
	enhanceWithSiteType,
} from 'state/analytics/actions';
import { withEnhancers } from 'state/utils';
import Main from 'components/main';
import RequestLoginEmailForm from './request-login-email-form';
import GlobalNotices from 'components/global-notices';
import Gridicon from 'gridicons';

class MagicLogin extends React.Component {
	static propTypes = {
		path: PropTypes.string.isRequired,

		// mapped to dispatch
		hideMagicLoginRequestForm: PropTypes.func.isRequired,
		recordPageView: PropTypes.func.isRequired,
		recordTracksEvent: PropTypes.func.isRequired,

		// mapped to state
		locale: PropTypes.string.isRequired,
		showCheckYourEmail: PropTypes.bool.isRequired,

		// From `localize`
		translate: PropTypes.func.isRequired,
	};

	componentDidMount() {
		this.props.recordPageView( '/log-in/link', 'Login > Link' );
	}

	onClickEnterPasswordInstead = event => {
		event.preventDefault();

		this.props.recordTracksEvent( 'calypso_login_email_link_page_click_back' );

		page( login( { isNative: true, locale: this.props.locale } ) );
	};

	renderLinks() {
		const { locale, showCheckYourEmail, translate } = this.props;

		if ( showCheckYourEmail ) {
			return null;
		}

		return (
			<div className="magic-login__footer">
				<a
					href={ login( { isNative: true, locale: locale } ) }
					onClick={ this.onClickEnterPasswordInstead }
				>
					<Gridicon icon="arrow-left" size={ 18 } />
					{ translate( 'Enter a password instead' ) }
				</a>
			</div>
		);
	}

	renderLocaleSuggestions() {
		const { locale, path, showCheckYourEmail } = this.props;

		if ( showCheckYourEmail ) {
			return null;
		}

		return <LocaleSuggestions locale={ locale } path={ path } />;
	}

	render() {
		return (
			<Main className="magic-login magic-login__request-link">
				{ this.renderLocaleSuggestions() }

				<GlobalNotices id="notices" notices={ notices.list } />

				<RequestLoginEmailForm />

				{ this.renderLinks() }
			</Main>
		);
	}
}

const mapState = state => ( {
	locale: getCurrentLocaleSlug( state ),
	showCheckYourEmail: getMagicLoginCurrentView( state ) === CHECK_YOUR_EMAIL_PAGE,
} );

const mapDispatch = {
	hideMagicLoginRequestForm,
	recordPageView: withEnhancers( recordPageView, [ enhanceWithSiteType ] ),
	recordTracksEvent: withEnhancers( recordTracksEvent, [ enhanceWithSiteType ] ),
};

export default connect(
	mapState,
	mapDispatch
)( localize( MagicLogin ) );
