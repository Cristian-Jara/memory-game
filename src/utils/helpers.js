import { initialGameState } from './constants';

export const handleSaveUserName = (userName, setter) => {
    const userEncoded = window.btoa(userName);
    window.localStorage.setItem('user_name', userEncoded);
    setter({
        userName,
        ...initialGameState,
        started: true,
    });
}

export const getStoredUserName = () => {
    const userEncoded = window.localStorage.getItem('user_name');
    return window.atob(userEncoded);
}

export const handleDuplicate = (array) => {
    return array.concat(array);
}

export const shuffle = (array) => {
    return array.sort(() => Math.random() - 0.5);
}

export const initializeCards = (images) => {
    const cleanImagesData = images.map(({ fields }) => ({
        uuid: fields.image.uuid,
        url: fields.image.url,
        flipped: false,
        solved: false,
    }));
    const cards = handleDuplicate(cleanImagesData);
    return shuffle(cards);
}