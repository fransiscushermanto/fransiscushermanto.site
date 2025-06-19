"use client";

import { useRef } from "react";
import mitt, { type AnyRecord } from "./mitt";

const useEmitter = <TEmitter, TEvent extends AnyRecord<TEvent>>(
  emitter?: TEmitter,
) => {
  const _emitter = useRef(emitter ?? mitt<TEvent>());

  return _emitter.current;
};

export default useEmitter;
