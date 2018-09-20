const defaultUserInfo = {
  name: 'Rajib',
  image: 'http://www.rajibkarmaker.me/wp-content/uploads/2018/09/Rajib.jpeg'
};

export default function reducer(
  state = {
    user: defaultUserInfo
  },
  action
) {
  return state;
}
