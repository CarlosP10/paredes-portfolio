"use client";
const type = {
  MODAL: "MODAL",
  PORTFOLIOMODAL: "PORTFOLIOMODAL",
  BLOGMODAL: "BLOGMODAL",
  SERVICEMODAL: "SERVICEMODAL",
};
const { MODAL, PORTFOLIOMODAL, BLOGMODAL, SERVICEMODAL } = type;

import { createContext, useCallback, useReducer } from "react";

const context = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case PORTFOLIOMODAL:
      return {
        ...state,
        portfolioModal: payload,
      };
    case BLOGMODAL:
      return {
        ...state,
        blogModal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    default:
      return state;
  }
};

const state = (props) => {
  const initialState = {
    modal: false,
    portfolioModal: null,
    blogModal: null,
    serviceModal: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setPortfolioModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIOMODAL,
      payload: value,
    });
  }, []);

  const setBlogModal = useCallback((value) => {
    dispatch({
      type: BLOGMODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);

  const { modal, portfolioModal, blogModal, serviceModal } = state;
  return (
    <context.Provider
      value={{
        modal,
        modalToggle,
        portfolioModal,
        setPortfolioModal,
        blogModal,
        setBlogModal,
        serviceModal,
        setServiceModal,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default state;

export { context };
