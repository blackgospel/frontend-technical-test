import { useCallback, useState } from 'react';

export function useDisclosure(initialState = false, callbacks = {}) {
  const { onOpen, onClose } = callbacks;
  const [opened, setOpened] = useState(initialState);

  const open = useCallback(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        if (onOpen) onOpen();
        return true;
      }
      return isOpened;
    });
  }, [onOpen]);

  const close = useCallback(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        if (onClose) onClose();
        return false;
      }
      return isOpened;
    });
  }, [onClose]);

  const toggle = useCallback(() => {
    if (opened) {
      close();
    } else {
      open();
    }
  }, [close, open, opened]);

  return [opened, { open, close, toggle }];
}
