import { useCallback } from "react";

export function useCopyToClipboard(): (value: string) => void {
  return useCallback((value: string) => {
    if (!navigator?.clipboard) {
      alert(
        "Your browser does not support clipboard access. Please copy manually."
      );
    }

    const handleError = (e: Error) => {
      console.error("Unable to copy to clipboard.", e);
    };

    navigator.clipboard.writeText(value).then(() => {}, handleError);
  }, []);
}
