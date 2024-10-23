import type { MessageKey } from "../i18n/i18n";
type ExtractAfterStartingWith<Prefix extends string, StrEnum> = StrEnum extends `${Prefix}${infer U}` ? U : never;
/** Take theses type definition with a grain of salt.
 * Some values might be undefined on some pages.
 * (ex: url.loginAction is undefined on error.ftl)
 */
export type KcContext =
    | KcContext.Login
    | KcContext.Register
    | KcContext.RegisterUserProfile
    | KcContext.Info
    | KcContext.Error
    | KcContext.LoginResetPassword
    | KcContext.LoginVerifyEmail
    | KcContext.Terms
    | KcContext.LoginDeviceVerifyUserCode
    | KcContext.LoginOauthGrant
    | KcContext.LoginOtp
    | KcContext.LoginUsername
    | KcContext.WebauthnAuthenticate
    | KcContext.LoginPassword
    | KcContext.LoginUpdatePassword
    | KcContext.LoginUpdateProfile
    | KcContext.LoginIdpLinkConfirm
    | KcContext.LoginIdpLinkEmail
    | KcContext.LoginPageExpired
    | KcContext.LoginConfigTotp
    | KcContext.LogoutConfirm
    | KcContext.UpdateUserProfile
    | KcContext.IdpReviewUserProfile
    | KcContext.UpdateEmail
    | KcContext.SelectAuthenticator
    | KcContext.SamlPostForm;
export declare namespace KcContext {
    type Common = {
        themeVersion: string;
        keycloakifyVersion: string;
        themeType: "login";
        themeName: string;
        url: {
            loginAction: string;
            resourcesPath: string;
            resourcesCommonPath: string;
            loginRestartFlowUrl: string;
            loginUrl: string;
        };
        realm: {
            name: string;
            displayName?: string;
            displayNameHtml?: string;
            internationalizationEnabled: boolean;
            registrationEmailAsUsername: boolean;
        };
        /** Undefined if !realm.internationalizationEnabled */
        locale?: {
            supported: {
                url: string;
                label: string;
                languageTag: string;
            }[];
            currentLanguageTag: string;
        };
        auth?: {
            showUsername?: boolean;
            showResetCredentials?: boolean;
            showTryAnotherWayLink?: boolean;
            attemptedUsername?: string;
        };
        scripts: string[];
        message?: {
            type: "success" | "warning" | "error" | "info";
            summary: string;
        };
        client: {
            clientId: string;
            name?: string;
            description?: string;
            attributes: Record<string, string>;
        };
        isAppInitiatedAction?: boolean;
        messagesPerField: {
            /**
             * Return text if message for given field exists. Useful eg. to add css styles for fields with message.
             *
             * @param fieldName to check for
             * @param text to return
             * @return text if message exists for given field, else undefined
             */
            printIfExists: <T extends string>(fieldName: string, text: T) => T | undefined;
            /**
             * Check if exists error message for given fields
             *
             * @param fields
             * @return boolean
             */
            existsError: (fieldName: string) => boolean;
            /**
             * Get message for given field.
             *
             * @param fieldName
             * @return message text or empty string
             */
            get: (fieldName: string) => string;
            /**
             * Check if message for given field exists
             *
             * @param field
             * @return boolean
             */
            exists: (fieldName: string) => boolean;
        };
        properties: Record<string, string | undefined>;
    };
    type SamlPostForm = Common & {
        pageId: "saml-post-form.ftl";
        samlPost: {
            url: string;
            SAMLRequest?: string;
            SAMLResponse?: string;
            relayState?: string;
        };
    };
    type Login = Common & {
        pageId: "login.ftl";
        url: {
            loginResetCredentialsUrl: string;
            registrationUrl: string;
        };
        realm: {
            loginWithEmailAllowed: boolean;
            rememberMe: boolean;
            password: boolean;
            resetPasswordAllowed: boolean;
            registrationAllowed: boolean;
        };
        auth: {
            selectedCredential?: string;
        };
        registrationDisabled: boolean;
        login: {
            username?: string;
            rememberMe?: string;
            password?: string;
        };
        usernameHidden?: boolean;
        social: {
            displayInfo: boolean;
            providers?: {
                loginUrl: string;
                alias: string;
                providerId: string;
                displayName: string;
            }[];
        };
    };
    type Register = RegisterUserProfile.CommonWithLegacy & {
        pageId: "register.ftl";
        register: {
            formData: {
                firstName?: string;
                displayName?: string;
                lastName?: string;
                email?: string;
                username?: string;
            };
        };
    };
    type RegisterUserProfile = RegisterUserProfile.CommonWithLegacy & {
        pageId: "register-user-profile.ftl";
        profile: {
            context: "REGISTRATION_PROFILE";
            attributes: Attribute[];
            attributesByName: Record<string, Attribute>;
        };
    };
    namespace RegisterUserProfile {
        type CommonWithLegacy = Common & {
            url: {
                registrationAction: string;
            };
            passwordRequired: boolean;
            recaptchaRequired: boolean;
            recaptchaSiteKey?: string;
            social: {
                displayInfo: boolean;
                providers?: {
                    loginUrl: string;
                    alias: string;
                    providerId: string;
                    displayName: string;
                }[];
            };
        };
    }
    type Info = Common & {
        pageId: "info.ftl";
        messageHeader?: string;
        requiredActions?: ExtractAfterStartingWith<"requiredAction.", MessageKey>[];
        skipLink: boolean;
        pageRedirectUri?: string;
        actionUri?: string;
        client: {
            baseUrl?: string;
        };
    };
    type Error = Common & {
        pageId: "error.ftl";
        client?: {
            baseUrl?: string;
        };
        message: NonNullable<Common["message"]>;
    };
    type LoginResetPassword = Common & {
        pageId: "login-reset-password.ftl";
        realm: {
            loginWithEmailAllowed: boolean;
        };
        url: {
            loginResetCredentialsUrl: string;
        };
    };
    type LoginVerifyEmail = Common & {
        pageId: "login-verify-email.ftl";
        user?: {
            email: string;
        };
    };
    type Terms = Common & {
        pageId: "terms.ftl";
        user?: {
            id: string;
            username: string;
            attributes: Record<string, string[]>;
            email: string;
            emailVerified: boolean;
            firstName?: string;
            lastName?: string;
            markedForEviction?: boolean;
        };
    };
    type LoginDeviceVerifyUserCode = Common & {
        pageId: "login-oauth2-device-verify-user-code.ftl";
        url: {
            oauth2DeviceVerificationAction: string;
        };
    };
    type LoginOauthGrant = Common & {
        pageId: "login-oauth-grant.ftl";
        oauth: {
            code: string;
            client: string;
            clientScopesRequested: {
                consentScreenText: string;
            }[];
        };
        url: {
            oauthAction: string;
        };
    };
    type LoginOtp = Common & {
        pageId: "login-otp.ftl";
        otpLogin: {
            userOtpCredentials: {
                id: string;
                userLabel: string;
            }[];
        };
    };
    type LoginUsername = Common & {
        pageId: "login-username.ftl";
        url: {
            loginResetCredentialsUrl: string;
            registrationUrl: string;
        };
        realm: {
            loginWithEmailAllowed: boolean;
            rememberMe: boolean;
            password: boolean;
            resetPasswordAllowed: boolean;
            registrationAllowed: boolean;
        };
        registrationDisabled: boolean;
        login: {
            username?: string;
            rememberMe?: string;
        };
        usernameHidden?: boolean;
        social: {
            displayInfo: boolean;
            providers?: {
                loginUrl: string;
                alias: string;
                providerId: string;
                displayName: string;
            }[];
        };
    };
    type LoginPassword = Common & {
        pageId: "login-password.ftl";
        url: {
            loginResetCredentialsUrl: string;
            registrationUrl: string;
        };
        realm: {
            resetPasswordAllowed: boolean;
        };
        auth?: {
            showUsername?: boolean;
            showResetCredentials?: boolean;
            showTryAnotherWayLink?: boolean;
            attemptedUsername?: string;
        };
        social: {
            displayInfo: boolean;
        };
        login: {
            password?: string;
        };
    };
    type WebauthnAuthenticate = Common & {
        pageId: "webauthn-authenticate.ftl";
        authenticators: {
            authenticators: WebauthnAuthenticate.WebauthnAuthenticator[];
        };
        challenge: string;
        userVerification: UserVerificationRequirement | "not specified";
        rpId: string;
        createTimeout: string;
        isUserIdentified: "true" | "false";
        shouldDisplayAuthenticators: boolean;
        social: {
            displayInfo: boolean;
        };
        login: {};
    };
    namespace WebauthnAuthenticate {
        type WebauthnAuthenticator = {
            credentialId: string;
            transports: {
                iconClass: string;
                displayNameProperties: MessageKey[];
            };
            label: string;
            createdAt: string;
        };
    }
    type LoginUpdatePassword = Common & {
        pageId: "login-update-password.ftl";
        username: string;
    };
    type LoginUpdateProfile = Common & {
        pageId: "login-update-profile.ftl";
        user: {
            editUsernameAllowed: boolean;
            username?: string;
            email?: string;
            firstName?: string;
            lastName?: string;
        };
        profile: {
            attributes: Attribute[];
            attributesByName: Record<string, Attribute>;
        };
    };
    type LoginIdpLinkConfirm = Common & {
        pageId: "login-idp-link-confirm.ftl";
        idpAlias: string;
    };
    type LoginIdpLinkEmail = Common & {
        pageId: "login-idp-link-email.ftl";
        brokerContext: {
            username: string;
        };
        idpAlias: string;
    };
    type LoginPageExpired = Common & {
        pageId: "login-page-expired.ftl";
    };
    type LoginConfigTotp = Common & {
        pageId: "login-config-totp.ftl";
        mode?: "qr" | "manual" | undefined | null;
        totp: {
            totpSecretEncoded: string;
            qrUrl: string;
            policy: {
                algorithm: "HmacSHA1" | "HmacSHA256" | "HmacSHA512";
                digits: number;
                lookAheadWindow: number;
            } & (
                | {
                      type: "totp";
                      period: number;
                  }
                | {
                      type: "hotp";
                      initialCounter: number;
                  }
            );
            supportedApplications: string[];
            totpSecretQrCode: string;
            manualUrl: string;
            totpSecret: string;
            otpCredentials: {
                id: string;
                userLabel: string;
            }[];
        };
    };
    type LogoutConfirm = Common & {
        pageId: "logout-confirm.ftl";
        url: {
            logoutConfirmAction: string;
        };
        client: {
            baseUrl?: string;
        };
        logoutConfirm: {
            code: string;
            skipLink?: boolean;
        };
    };
    type UpdateUserProfile = Common & {
        pageId: "update-user-profile.ftl";
        profile: {
            attributes: Attribute[];
            attributesByName: Record<string, Attribute>;
        };
    };
    type IdpReviewUserProfile = Common & {
        pageId: "idp-review-user-profile.ftl";
        profile: {
            context: "IDP_REVIEW";
            attributes: Attribute[];
            attributesByName: Record<string, Attribute>;
        };
    };
    type UpdateEmail = Common & {
        pageId: "update-email.ftl";
        email: {
            value?: string;
        };
    };
    type SelectAuthenticator = Common & {
        pageId: "select-authenticator.ftl";
        auth: {
            authenticationSelections: SelectAuthenticator.AuthenticationSelection[];
        };
    };
    namespace SelectAuthenticator {
        type AuthenticationSelection = {
            authExecId: string;
            displayName:
                | "otp-display-name"
                | "password-display-name"
                | "auth-username-form-display-name"
                | "auth-username-password-form-display-name"
                | "webauthn-display-name"
                | "webauthn-passwordless-display-name";
            helpText:
                | "otp-help-text"
                | "password-help-text"
                | "auth-username-form-help-text"
                | "auth-username-password-form-help-text"
                | "webauthn-help-text"
                | "webauthn-passwordless-help-text";
            iconCssClass?:
                | "kcAuthenticatorDefaultClass"
                | "kcAuthenticatorPasswordClass"
                | "kcAuthenticatorOTPClass"
                | "kcAuthenticatorWebAuthnClass"
                | "kcAuthenticatorWebAuthnPasswordlessClass";
        };
    }
}
export type Attribute = {
    name: string;
    displayName?: string;
    required: boolean;
    value?: string;
    group?: string;
    groupDisplayHeader?: string;
    groupDisplayDescription?: string;
    readOnly: boolean;
    validators: Validators;
    annotations: Record<string, string>;
    groupAnnotations: Record<string, string>;
    autocomplete?:
        | "on"
        | "off"
        | "name"
        | "honorific-prefix"
        | "given-name"
        | "additional-name"
        | "family-name"
        | "honorific-suffix"
        | "nickname"
        | "email"
        | "username"
        | "new-password"
        | "current-password"
        | "one-time-code"
        | "organization-title"
        | "organization"
        | "street-address"
        | "address-line1"
        | "address-line2"
        | "address-line3"
        | "address-level4"
        | "address-level3"
        | "address-level2"
        | "address-level1"
        | "country"
        | "country-name"
        | "postal-code"
        | "cc-name"
        | "cc-given-name"
        | "cc-additional-name"
        | "cc-family-name"
        | "cc-number"
        | "cc-exp"
        | "cc-exp-month"
        | "cc-exp-year"
        | "cc-csc"
        | "cc-type"
        | "transaction-currency"
        | "transaction-amount"
        | "language"
        | "bday"
        | "bday-day"
        | "bday-month"
        | "bday-year"
        | "sex"
        | "tel"
        | "tel-country-code"
        | "tel-national"
        | "tel-area-code"
        | "tel-local"
        | "tel-extension"
        | "impp"
        | "url"
        | "photo";
};
export type Validators = Partial<{
    length: Validators.DoIgnoreEmpty & Validators.Range;
    double: Validators.DoIgnoreEmpty & Validators.Range;
    integer: Validators.DoIgnoreEmpty & Validators.Range;
    email: Validators.DoIgnoreEmpty;
    "up-immutable-attribute": {};
    "up-attribute-required-by-metadata-value": {};
    "up-username-has-value": {};
    "up-duplicate-username": {};
    "up-username-mutation": {};
    "up-email-exists-as-username": {};
    "up-blank-attribute-value": Validators.ErrorMessage & {
        "fail-on-null": boolean;
    };
    "up-duplicate-email": {};
    "local-date": Validators.DoIgnoreEmpty;
    pattern: Validators.DoIgnoreEmpty &
        Validators.ErrorMessage & {
            pattern: string;
        };
    "person-name-prohibited-characters": Validators.DoIgnoreEmpty & Validators.ErrorMessage;
    uri: Validators.DoIgnoreEmpty;
    "username-prohibited-characters": Validators.DoIgnoreEmpty & Validators.ErrorMessage;
    /** Made up validator that only exists in Keycloakify */
    _compareToOther: Validators.DoIgnoreEmpty &
        Validators.ErrorMessage & {
            name: string;
            shouldBe: "equal" | "different";
        };
    options: Validators.Options;
}>;
export declare namespace Validators {
    type DoIgnoreEmpty = {
        "ignore.empty.value"?: boolean;
    };
    type ErrorMessage = {
        "error-message"?: string;
    };
    type Range = {
        /** "0", "1", "2"... yeah I know, don't tell me */
        min?: `${number}`;
        max?: `${number}`;
    };
    type Options = {
        options: string[];
    };
}
export {};
