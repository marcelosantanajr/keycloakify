declare const messages: {
    doLogIn: string;
    doRegister: string;
    doCancel: string;
    doSubmit: string;
    doBack: string;
    doYes: string;
    doNo: string;
    doContinue: string;
    doIgnore: string;
    doAccept: string;
    doDecline: string;
    doForgotPassword: string;
    doClickHere: string;
    doImpersonate: string;
    doTryAgain: string;
    doTryAnotherWay: string;
    doConfirmDelete: string;
    errorDeletingAccount: string;
    deletingAccountForbidden: string;
    kerberosNotConfigured: string;
    kerberosNotConfiguredTitle: string;
    bypassKerberosDetail: string;
    kerberosNotSetUp: string;
    registerTitle: string;
    loginAccountTitle: string;
    loginTitle: string;
    loginTitleHtml: string;
    impersonateTitle: string;
    impersonateTitleHtml: string;
    realmChoice: string;
    unknownUser: string;
    loginTotpTitle: string;
    loginProfileTitle: string;
    loginIdpReviewProfileTitle: string;
    loginTimeout: string;
    reauthenticate: string;
    oauthGrantTitle: string;
    oauthGrantTitleHtml: string;
    oauthGrantInformation: string;
    oauthGrantReview: string;
    oauthGrantTos: string;
    oauthGrantPolicy: string;
    errorTitle: string;
    errorTitleHtml: string;
    emailVerifyTitle: string;
    emailForgotTitle: string;
    updateEmailTitle: string;
    emailUpdateConfirmationSentTitle: string;
    emailUpdateConfirmationSent: string;
    emailUpdatedTitle: string;
    emailUpdated: string;
    updatePasswordTitle: string;
    codeSuccessTitle: string;
    codeErrorTitle: string;
    displayUnsupported: string;
    browserRequired: string;
    browserContinue: string;
    browserContinuePrompt: string;
    browserContinueAnswer: string;
    usb: string;
    nfc: string;
    bluetooth: string;
    internal: string;
    unknown: string;
    termsTitle: string;
    termsText: string;
    termsPlainText: string;
    recaptchaFailed: string;
    recaptchaNotConfigured: string;
    consentDenied: string;
    noAccount: string;
    username: string;
    usernameOrEmail: string;
    firstName: string;
    givenName: string;
    fullName: string;
    lastName: string;
    familyName: string;
    email: string;
    password: string;
    passwordConfirm: string;
    passwordNew: string;
    passwordNewConfirm: string;
    rememberMe: string;
    authenticatorCode: string;
    address: string;
    street: string;
    locality: string;
    region: string;
    postal_code: string;
    country: string;
    emailVerified: string;
    website: string;
    phoneNumber: string;
    phoneNumberVerified: string;
    gender: string;
    birthday: string;
    zoneinfo: string;
    gssDelegationCredential: string;
    logoutOtherSessions: string;
    profileScopeConsentText: string;
    emailScopeConsentText: string;
    addressScopeConsentText: string;
    phoneScopeConsentText: string;
    offlineAccessScopeConsentText: string;
    samlRoleListScopeConsentText: string;
    rolesScopeConsentText: string;
    restartLoginTooltip: string;
    loginTotpIntro: string;
    loginTotpStep1: string;
    loginTotpStep2: string;
    loginTotpStep3: string;
    loginTotpStep3DeviceName: string;
    loginTotpManualStep2: string;
    loginTotpManualStep3: string;
    loginTotpUnableToScan: string;
    loginTotpScanBarcode: string;
    loginCredential: string;
    loginOtpOneTime: string;
    loginTotpType: string;
    loginTotpAlgorithm: string;
    loginTotpDigits: string;
    loginTotpInterval: string;
    loginTotpCounter: string;
    loginTotpDeviceName: string;
    "loginTotp.totp": string;
    "loginTotp.hotp": string;
    totpAppFreeOTPName: string;
    totpAppGoogleName: string;
    totpAppMicrosoftAuthenticatorName: string;
    loginChooseAuthenticator: string;
    oauthGrantRequest: string;
    inResource: string;
    oauth2DeviceVerificationTitle: string;
    verifyOAuth2DeviceUserCode: string;
    oauth2DeviceInvalidUserCodeMessage: string;
    oauth2DeviceExpiredUserCodeMessage: string;
    oauth2DeviceVerificationCompleteHeader: string;
    oauth2DeviceVerificationCompleteMessage: string;
    oauth2DeviceVerificationFailedHeader: string;
    oauth2DeviceVerificationFailedMessage: string;
    oauth2DeviceConsentDeniedMessage: string;
    oauth2DeviceAuthorizationGrantDisabledMessage: string;
    emailVerifyInstruction1: string;
    emailVerifyInstruction2: string;
    emailVerifyInstruction3: string;
    emailLinkIdpTitle: string;
    emailLinkIdp1: string;
    emailLinkIdp2: string;
    emailLinkIdp3: string;
    emailLinkIdp4: string;
    emailLinkIdp5: string;
    backToLogin: string;
    emailInstruction: string;
    emailInstructionUsername: string;
    copyCodeInstruction: string;
    pageExpiredTitle: string;
    pageExpiredMsg1: string;
    pageExpiredMsg2: string;
    personalInfo: string;
    role_admin: string;
    "role_realm-admin": string;
    "role_create-realm": string;
    "role_create-client": string;
    "role_view-realm": string;
    "role_view-users": string;
    "role_view-applications": string;
    "role_view-clients": string;
    "role_view-events": string;
    "role_view-identity-providers": string;
    "role_manage-realm": string;
    "role_manage-users": string;
    "role_manage-applications": string;
    "role_manage-identity-providers": string;
    "role_manage-clients": string;
    "role_manage-events": string;
    "role_view-profile": string;
    "role_manage-account": string;
    "role_manage-account-links": string;
    "role_read-token": string;
    "role_offline-access": string;
    client_account: string;
    "client_account-console": string;
    "client_security-admin-console": string;
    "client_admin-cli": string;
    "client_realm-management": string;
    client_broker: string;
    requiredFields: string;
    invalidUserMessage: string;
    invalidUsernameMessage: string;
    invalidUsernameOrEmailMessage: string;
    invalidPasswordMessage: string;
    invalidEmailMessage: string;
    accountDisabledMessage: string;
    accountTemporarilyDisabledMessage: string;
    expiredCodeMessage: string;
    expiredActionMessage: string;
    expiredActionTokenNoSessionMessage: string;
    expiredActionTokenSessionExistsMessage: string;
    sessionLimitExceeded: string;
    missingFirstNameMessage: string;
    missingLastNameMessage: string;
    missingEmailMessage: string;
    missingUsernameMessage: string;
    missingPasswordMessage: string;
    missingTotpMessage: string;
    missingTotpDeviceNameMessage: string;
    notMatchPasswordMessage: string;
    "error-invalid-value": string;
    "error-invalid-blank": string;
    "error-empty": string;
    "error-invalid-length": string;
    "error-invalid-length-too-short": string;
    "error-invalid-length-too-long": string;
    "error-invalid-email": string;
    "error-invalid-number": string;
    "error-number-out-of-range": string;
    "error-number-out-of-range-too-small": string;
    "error-number-out-of-range-too-big": string;
    "error-pattern-no-match": string;
    "error-invalid-uri": string;
    "error-invalid-uri-scheme": string;
    "error-invalid-uri-fragment": string;
    "error-user-attribute-required": string;
    "error-invalid-date": string;
    "error-user-attribute-read-only": string;
    "error-username-invalid-character": string;
    "error-person-name-invalid-character": string;
    invalidPasswordExistingMessage: string;
    invalidPasswordBlacklistedMessage: string;
    invalidPasswordConfirmMessage: string;
    invalidTotpMessage: string;
    usernameExistsMessage: string;
    emailExistsMessage: string;
    federatedIdentityExistsMessage: string;
    federatedIdentityUnavailableMessage: string;
    confirmLinkIdpTitle: string;
    federatedIdentityConfirmLinkMessage: string;
    federatedIdentityConfirmReauthenticateMessage: string;
    nestedFirstBrokerFlowMessage: string;
    confirmLinkIdpReviewProfile: string;
    confirmLinkIdpContinue: string;
    configureTotpMessage: string;
    configureBackupCodesMessage: string;
    updateProfileMessage: string;
    updatePasswordMessage: string;
    updateEmailMessage: string;
    resetPasswordMessage: string;
    verifyEmailMessage: string;
    linkIdpMessage: string;
    emailSentMessage: string;
    emailSendErrorMessage: string;
    accountUpdatedMessage: string;
    accountPasswordUpdatedMessage: string;
    delegationCompleteHeader: string;
    delegationCompleteMessage: string;
    delegationFailedHeader: string;
    delegationFailedMessage: string;
    noAccessMessage: string;
    invalidPasswordMinLengthMessage: string;
    invalidPasswordMaxLengthMessage: string;
    invalidPasswordMinDigitsMessage: string;
    invalidPasswordMinLowerCaseCharsMessage: string;
    invalidPasswordMinUpperCaseCharsMessage: string;
    invalidPasswordMinSpecialCharsMessage: string;
    invalidPasswordNotUsernameMessage: string;
    invalidPasswordNotEmailMessage: string;
    invalidPasswordRegexPatternMessage: string;
    invalidPasswordHistoryMessage: string;
    invalidPasswordGenericMessage: string;
    failedToProcessResponseMessage: string;
    httpsRequiredMessage: string;
    realmNotEnabledMessage: string;
    invalidRequestMessage: string;
    successLogout: string;
    failedLogout: string;
    unknownLoginRequesterMessage: string;
    loginRequesterNotEnabledMessage: string;
    bearerOnlyMessage: string;
    standardFlowDisabledMessage: string;
    implicitFlowDisabledMessage: string;
    invalidRedirectUriMessage: string;
    unsupportedNameIdFormatMessage: string;
    invalidRequesterMessage: string;
    registrationNotAllowedMessage: string;
    resetCredentialNotAllowedMessage: string;
    permissionNotApprovedMessage: string;
    noRelayStateInResponseMessage: string;
    insufficientPermissionMessage: string;
    couldNotProceedWithAuthenticationRequestMessage: string;
    couldNotObtainTokenMessage: string;
    unexpectedErrorRetrievingTokenMessage: string;
    unexpectedErrorHandlingResponseMessage: string;
    identityProviderAuthenticationFailedMessage: string;
    couldNotSendAuthenticationRequestMessage: string;
    unexpectedErrorHandlingRequestMessage: string;
    invalidAccessCodeMessage: string;
    sessionNotActiveMessage: string;
    invalidCodeMessage: string;
    cookieNotFoundMessage: string;
    insufficientLevelOfAuthentication: string;
    identityProviderUnexpectedErrorMessage: string;
    identityProviderMissingStateMessage: string;
    identityProviderInvalidResponseMessage: string;
    identityProviderInvalidSignatureMessage: string;
    identityProviderNotFoundMessage: string;
    identityProviderLinkSuccess: string;
    staleCodeMessage: string;
    realmSupportsNoCredentialsMessage: string;
    credentialSetupRequired: string;
    identityProviderNotUniqueMessage: string;
    emailVerifiedMessage: string;
    staleEmailVerificationLink: string;
    identityProviderAlreadyLinkedMessage: string;
    confirmAccountLinking: string;
    confirmEmailAddressVerification: string;
    confirmExecutionOfActions: string;
    locale_ar: string;
    locale_ca: string;
    locale_cs: string;
    locale_da: string;
    locale_de: string;
    locale_en: string;
    locale_es: string;
    locale_fr: string;
    locale_gr: string;
    locale_hu: string;
    locale_it: string;
    locale_ja: string;
    locale_lt: string;
    locale_nl: string;
    locale_no: string;
    locale_pl: string;
    locale_pt_BR: string;
    "locale_pt-BR": string;
    locale_ru: string;
    locale_sk: string;
    locale_sv: string;
    locale_tr: string;
    "locale_zh-CN": string;
    locale_fi: string;
    backToApplication: string;
    missingParameterMessage: string;
    clientNotFoundMessage: string;
    clientDisabledMessage: string;
    invalidParameterMessage: string;
    alreadyLoggedIn: string;
    differentUserAuthenticated: string;
    brokerLinkingSessionExpired: string;
    proceedWithAction: string;
    acrNotFulfilled: string;
    "requiredAction.CONFIGURE_TOTP": string;
    "requiredAction.terms_and_conditions": string;
    "requiredAction.UPDATE_PASSWORD": string;
    "requiredAction.UPDATE_PROFILE": string;
    "requiredAction.VERIFY_EMAIL": string;
    "requiredAction.CONFIGURE_RECOVERY_AUTHN_CODES": string;
    "requiredAction.webauthn-register-passwordless": string;
    invalidTokenRequiredActions: string;
    doX509Login: string;
    clientCertificate: string;
    noCertificate: string;
    pageNotFound: string;
    internalServerError: string;
    "console-username": string;
    "console-password": string;
    "console-otp": string;
    "console-new-password": string;
    "console-confirm-password": string;
    "console-update-password": string;
    "console-verify-email": string;
    "console-email-code": string;
    "console-accept-terms": string;
    "console-accept": string;
    "openshift.scope.user_info": string;
    "openshift.scope.user_check-access": string;
    "openshift.scope.user_full": string;
    "openshift.scope.list-projects": string;
    "saml.post-form.title": string;
    "saml.post-form.message": string;
    "saml.post-form.js-disabled": string;
    "saml.artifactResolutionServiceInvalidResponse": string;
    "otp-display-name": string;
    "otp-help-text": string;
    "password-display-name": string;
    "password-help-text": string;
    "auth-username-form-display-name": string;
    "auth-username-form-help-text": string;
    "auth-username-password-form-display-name": string;
    "auth-username-password-form-help-text": string;
    "auth-recovery-authn-code-form-display-name": string;
    "auth-recovery-authn-code-form-help-text": string;
    "auth-recovery-code-info-message": string;
    "auth-recovery-code-prompt": string;
    "auth-recovery-code-header": string;
    "recovery-codes-error-invalid": string;
    "recovery-code-config-header": string;
    "recovery-code-config-warning-title": string;
    "recovery-code-config-warning-message": string;
    "recovery-codes-print": string;
    "recovery-codes-download": string;
    "recovery-codes-copy": string;
    "recovery-codes-copied": string;
    "recovery-codes-confirmation-message": string;
    "recovery-codes-action-complete": string;
    "recovery-codes-action-cancel": string;
    "recovery-codes-download-file-header": string;
    "recovery-codes-download-file-description": string;
    "recovery-codes-download-file-date": string;
    "recovery-codes-label-default": string;
    "webauthn-display-name": string;
    "webauthn-help-text": string;
    "webauthn-passwordless-display-name": string;
    "webauthn-passwordless-help-text": string;
    "webauthn-login-title": string;
    "webauthn-registration-title": string;
    "webauthn-available-authenticators": string;
    "webauthn-unsupported-browser-text": string;
    "webauthn-doAuthenticate": string;
    "webauthn-createdAt-label": string;
    "webauthn-error-title": string;
    "webauthn-error-registration": string;
    "webauthn-error-api-get": string;
    "webauthn-error-different-user": string;
    "webauthn-error-auth-verification": string;
    "webauthn-error-register-verification": string;
    "webauthn-error-user-not-found": string;
    "identity-provider-redirector": string;
    "identity-provider-login-label": string;
    "idp-email-verification-display-name": string;
    "idp-email-verification-help-text": string;
    "idp-username-password-form-display-name": string;
    "idp-username-password-form-help-text": string;
    finalDeletionConfirmation: string;
    irreversibleAction: string;
    deleteAccountConfirm: string;
    deletingImplies: string;
    errasingData: string;
    loggingOutImmediately: string;
    accountUnusable: string;
    userDeletedSuccessfully: string;
    "access-denied": string;
    "access-denied-when-idp-auth": string;
    "frontchannel-logout.title": string;
    "frontchannel-logout.message": string;
    logoutConfirmTitle: string;
    logoutConfirmHeader: string;
    doLogout: string;
    readOnlyUsernameMessage: string;
};
export default messages;
