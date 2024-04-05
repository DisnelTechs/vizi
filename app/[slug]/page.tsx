import Hero from "@/components/Hero";

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: PageProps) => {
  return <Hero title={slug} />;
};

export default Page;
