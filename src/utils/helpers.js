export const handleSaveUserName = (userName, setter) => {
  const userEncoded = window.btoa(userName);
  window.localStorage.setItem('user_name', userEncoded);
  setter(userName);
};

export const getStoredUserName = () => {
  const userEncoded = window.localStorage.getItem('user_name');
  return window.atob(userEncoded);
};

export const handleDuplicate = (array) => {
  return array.reduce((newArray, item) => {
    const duplicated = [
      ...newArray,
      { ...item, id: `${item.uuid}-0` },
      { ...item, id: `${item.uuid}-1` },
    ];
    return duplicated;
  }, []);
};

export const shuffle = (array) =>
  array.reduce(
    (newArray, _, i) => {
      const randomIndex = i + Math.floor(Math.random() * (newArray.length - i));
      [newArray[randomIndex], newArray[i]] = [newArray[i], newArray[randomIndex]];
      return newArray;
    },
    [...array]
  );

export const cleanImagesData = (images) =>
  images.map(({ fields }) => {
    return {
      uuid: fields.image.uuid,
      url: fields.image.url,
      matched: false,
    };
  });

export const initializeCards = (images, peers) => {
  if (peers !== images.length) {
    const shuffledImages = shuffle(images);
    const selectedImages = shuffledImages.slice(0, peers);
    return shuffle(handleDuplicate(selectedImages));
  }
  return shuffle(handleDuplicate(images));
};
