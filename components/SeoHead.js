import Head from "next/head";
import { useRouter } from "next/router";

const defaultMeta = {
  title: 'SapdaConnect | Jasa Website & WiFi Profesional',
  siteName: 'SapdaConnect',
  description:
    'Solusi digital terintegrasi: Pembuatan website bisnis, landing page, dan instalasi WiFi berkecepatan tinggi untuk kantor dan rumah.',
  url: 'https://techconnect.id',
  type: 'website',
  robots: 'follow, index',
  image: 'https://techconnect.id/assets/card-image.png',
  author: 'SapdaConnect Team'
};

const SeoHead = (props) => {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props
  };

  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      
      {/* PENGATURAN FAVICON YANG BENAR */}
      {/* Jika file favicon.ico ditaruh langsung di dalam folder public */}
      <link rel="shortcut icon" href="/favicon.ico" /> 
      
      {/* Jika file ditaruh di public/favicon/ */}
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon.ico" />

      {/* Social Media Meta Tags */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <meta name='image' property='og:image' content={meta.image} />
      
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      
      <meta name='msapplication-TileColor' content='#4F46E5' />
      <meta name='theme-color' content='#4F46E5' />
    </Head>
  );
};

export default SeoHead;