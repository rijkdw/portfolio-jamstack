"use client";

import buildSanityConfig from "@portfolio/sanity-config/src/sanityConfigs/buildSanityConfig";
import { NextStudio } from "next-sanity/studio";

import "./studio.css";

type Props = {
  projectId: string;
  dataset: string;
};

export default function StudioComponent({ dataset, projectId }: Props) {
  const config = buildSanityConfig({ projectId, dataset });

  return (
    <div>
      <p className="text-center mb-2 text-slate-400 h-[2vh]">
        dataset={dataset}&emsp;&emsp;projectId={projectId}
      </p>
      <NextStudio basePath="/studio" config={config} />
    </div>
  );
}
