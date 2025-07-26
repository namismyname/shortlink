import { getLink } from '../lib/store';

export async function getServerSideProps({ params }) {
  const destination = getLink(params.id);
  if (!destination) {
    return { notFound: true };
  }

  return {
    redirect: {
      destination,
      permanent: false,
    },
  };
}

export default function RedirectPage() {
  return <p>Redirecting...</p>;
}
