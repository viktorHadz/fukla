import { ref, list, getDownloadURL } from 'firebase/storage';

export const fetchImagesFromStorage = async (storage, path, options = {}) => {
  const storageRef = ref(storage, path);
  const result = await list(storageRef, options);

  const images = await Promise.all(
    result.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const img = new Image(); // Preload the image
      img.src = url;
      return { name: item.name, url };
    })
  );

  return { images, nextPageToken: result.nextPageToken || null };
};
