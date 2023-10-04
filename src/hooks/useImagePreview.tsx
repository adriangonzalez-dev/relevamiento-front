import { useState, useEffect } from "react";

export const useImagePreview = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<{
    url: string;
    width: number | undefined;
    height: number | undefined;
  }[]>([]);

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;

    if (selectedFiles) {
      const imageFiles = Array.from(selectedFiles).filter((file) =>
        file.type.startsWith('image/')
      );

      const loadAndConvertImages = async () => {
        const loadedImages = await Promise.all(
          imageFiles.map(async (file) => {
            const imageUrl = URL.createObjectURL(file);
            const canvas = document.createElement('canvas');
            const image = new Image();

            await new Promise((resolve) => {
              image.onload = resolve;
              image.src = imageUrl;
            });

            canvas.width = image.width;
            canvas.height = image.height;
            const ctx = canvas.getContext('2d');
            ctx?.drawImage(image, 0, 0, image.width, image.height);
            
            // Convierte la imagen a formato WebP
            const webpDataURL = canvas.toDataURL('image/webp');
            
            return {
              url: webpDataURL,
              width: image.width,
              height: image.height,
            };
          })
        );

        setImages((prevImages) => [...prevImages, ...imageFiles]);
        setImagePreviews((prevPreviews) => [...prevPreviews, ...loadedImages]);
      };

      loadAndConvertImages();
    }

    e.target.value = '';
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  useEffect(() => {
    // Limpia las imágenes y vistas previas cuando el componente se desmonta
    return () => {
      imagePreviews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [imagePreviews]);

  return {
    handleFileInputChange,
    imagePreviews,
    images,
    handleRemoveImage,
  };
};
