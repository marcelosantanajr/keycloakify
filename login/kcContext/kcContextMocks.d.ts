import "minimal-polyfills/Object.fromEntries";
import type { KcContext } from "./KcContext";
export declare const kcContextCommonMock: KcContext.Common;
export declare const kcContextMocks: (
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
    | KcContext.SamlPostForm
)[];
