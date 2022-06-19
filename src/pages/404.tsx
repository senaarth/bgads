import React from "react";
import { useRouter } from "next/router";

export default function Home(): JSX.Element {
  const router = useRouter();

  React.useEffect(() => {
    router?.push("/");
  }, []);

  return <></>;
}
