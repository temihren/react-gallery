import {axiosFetch} from 'utils/axiosFetch';

export const getImages = (params) => axiosFetch.get('/photos', {
    params
});

export const getMediaObject = (id) => axiosFetch.get(`/media_objects/${id}`);
