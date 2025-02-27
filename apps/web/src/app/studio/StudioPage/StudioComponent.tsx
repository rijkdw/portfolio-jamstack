"use client";

import buildSanityConfig from "@portfolio/sanity-config/src/sanityConfigs/buildSanityConfig";
import { NextStudio } from "next-sanity/studio";
import StudioComponentHeader from "./StudioComponentHeader";
import { NavbarProps } from "sanity";

type Props = {
  projectId: string;
  dataset: string;
  homeUrl?: string;
  revalidateUrl?: string;
};

export default function StudioComponent({
  dataset,
  projectId,
  homeUrl,
  revalidateUrl,
}: Props) {
  const config = buildSanityConfig({
    projectId,
    dataset,
    studioComponents: {
      navbar: (props: NavbarProps) => (
        <StudioComponentHeader
          dataset={dataset}
          projectId={projectId}
          homeUrl={homeUrl}
          revalidateUrl={revalidateUrl}
          {...props}
        />
      ),
    },
  });

  return <NextStudio basePath="/studio" config={config} />;
}
