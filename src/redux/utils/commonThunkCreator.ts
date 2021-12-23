export const commonThunkCreator = (operation: any, dispatch: any) => {
  const tryCathed = withTryCath(operation, dispatch);
  const isFetching = withIsFetching(tryCathed, dispatch);
  return isFetching();
};

const withTryCath = (operation: any, dispatch: any) => {
  return async () => {
    try {
      return await operation();
    } catch (e: any) {
      console.log(e);
    }
    return null;
  };
};

const withIsFetching = (operation: any, dispatch: any) => {
  return async () => {
    // dispatch(appActions.setIsFetching(true))
    await operation();
    // dispatch(appActions.setIsFetching(false))
  };
};
