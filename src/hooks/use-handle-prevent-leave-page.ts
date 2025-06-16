interface UseHandlePreventLeavePageOptions {
  enabled: boolean;
}

function useHandlePreventLeavePage(options: UseHandlePreventLeavePageOptions) {
  const { enabled } = options;

  if (!enabled) return;

  function beforeUnload(event: BeforeUnloadEvent) {
    event.preventDefault();
  }

  window.addEventListener("beforeunload", beforeUnload);

  return () => {
    window.removeEventListener("beforeunload", beforeUnload);
  };
}

export default useHandlePreventLeavePage;
