import { useState } from 'react';
import { getImageSrcSet, getImageUrl } from '../utils/images';
import './ArticleImage.css';

const FALLBACK_ID = 'photo-1486406146926-c627a92ad1ab';

export default function ArticleImage({
  photoId,
  alt,
  className = '',
  loading = 'lazy',
  width = 800,
  height = 500,
  sizes = '(max-width: 768px) 100vw, 50vw',
}) {
  const [activeId, setActiveId] = useState(photoId);
  const src = getImageUrl(activeId, width, height);
  const srcSet = activeId === photoId ? getImageSrcSet(photoId) : undefined;

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`article-image ${className}`.trim()}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      onError={() => {
        if (activeId !== FALLBACK_ID) {
          setActiveId(FALLBACK_ID);
        }
      }}
    />
  );
}
