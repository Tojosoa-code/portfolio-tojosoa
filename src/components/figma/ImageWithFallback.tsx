import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(
  props: React.ImgHTMLAttributes<HTMLImageElement>
) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    // AJUSTEMENT DU FALLBACK :
    // - w-24 h-24 : Donne une taille fixe au conteneur du fallback (vous pouvez ajuster w-20 h-20 etc.)
    // - flex : pour centrer facilement.
    // - bg-gray-600/10 : fond sombre pour le contraste
    // - className : toujours appliqué pour conserver les marges/bordures
    <div
      className={`flex items-center justify-center w-24 h-24 bg-gray-600/10 rounded-lg ${
        className ?? ""
      }`}
      style={style}
    >
      <img
        src={ERROR_IMG_SRC}
        alt="Error loading image"
        data-original-url={src}
        // L'icône SVG interne est affichée à une taille réduite de 80% (scale-80)
        // en utilisant les classes de transformation de Tailwind.
        className="transform scale-80 opacity-50"
        {...rest}
      />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      {...rest}
      onError={handleError}
    />
  );
}
