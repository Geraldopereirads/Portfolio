"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectPreview({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="project-preview">
      {hasError ? (
        <div
          className="project-preview-fallback"
          role="img"
          aria-label={`Prévia indisponível para ${title}`}
        >
          <span className="project-preview-mark" aria-hidden="true">
            {"</>"}
          </span>
          <span>Prévia indisponível</span>
        </div>
      ) : (
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
          unoptimized
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
