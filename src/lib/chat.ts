export const openSupportChat = () => {
  if (typeof window !== "undefined" && (window as any).jivo_api && typeof (window as any).jivo_api.open === "function") {
    (window as any).jivo_api.open();
  } else {
    console.warn("JivoChat is not loaded yet. The chat will open once it initializes.");
  }
};
