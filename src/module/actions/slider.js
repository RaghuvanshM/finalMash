import axios from 'axios';

export const sliderLoading = bool => ({
  type: 'SLIDER_LOADING',
  isLoading: bool,
});

export const getSliderPhoto = photos => ({
  type: 'GET_SLIDERS_PHOTOS',
  photos,
});

export const getSliderPhotos = () => dispatch => {
  return axios({
    method: 'GET',
    url: 'http://siyakart.in/api/banner-list',
  })
    .then(result => {
      if (result && result.data && result.status) {
        dispatch(getSliderPhoto(result.data.data));
      } else {
        dispatch(sliderLoading(false));
      }
    })
    .catch(err => {
      dispatch(sliderLoading(false));
    });
};
