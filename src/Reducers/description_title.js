export default function descriptionTitle(state = [], action) {
  switch (action.type) {
    case 'DEFINE_TITLE_DESCRIPTION':
      return state.concat([action.text]);
    default:
      return state;
  }
}
