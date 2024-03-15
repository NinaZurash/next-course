import { notFound } from "next/navigation";

type Props = {
  params: { slug: string[] };
};

export default function Docs({ params }: Props) {
  if (params.slug?.length > 2) {
    notFound();
  } else if (params.slug?.length >= 1) {
    return <h2>{params.slug[0]}</h2>;
  }
  return <div>Docs</div>;
}
