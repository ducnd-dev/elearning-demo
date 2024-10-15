import { enUS, frFR } from '@clerk/localizations';
import { ClerkProvider } from '@clerk/nextjs';
import { getCookie } from 'cookies-next';
import { AuthStoreProvider } from '@/providers/user-store-provider';

// import request from '@/libs/request';
import { AppConfig } from '@/utils/AppConfig';

// const getUser = async () => {
//   const user = await request('/api/users/profile');
//   return user;
// };
// const AuthCustomProvider = async (props: { children: React.ReactNode; signInFallbackRedirectUrl: string }) => {
//   return <>{props.children}</>;
// };
export default async function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let clerkLocale = enUS;
  let signInUrl = '/sign-in';
  let signUpUrl = '/sign-up';
  let dashboardUrl = '/dashboard';

  if (props.params.locale === 'fr') {
    clerkLocale = frFR;
  }

  if (props.params.locale !== AppConfig.defaultLocale) {
    signInUrl = `/${props.params.locale}${signInUrl}`;
    signUpUrl = `/${props.params.locale}${signUpUrl}`;
    dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
  }
  const token = getCookie('token');
  if (token) {
    return (<>{props.children}</>);
  }

  return (
    <ClerkProvider
      localization={clerkLocale}
      signInUrl={signInUrl}
      signUpUrl={signUpUrl}
      signInFallbackRedirectUrl={dashboardUrl}
      signUpFallbackRedirectUrl={dashboardUrl}
    >
      <AuthStoreProvider>
        {props.children}
      </AuthStoreProvider>
    </ClerkProvider>
  );
}
