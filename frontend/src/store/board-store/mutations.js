export const boardMutation = (state,opened) => {
    state.board = opened;
};
export const categoryMutation = (state,opened) => {
  state.categories = opened;
};

export const countMutation = (state,opened) => {
    state.countResult = opened;
}
