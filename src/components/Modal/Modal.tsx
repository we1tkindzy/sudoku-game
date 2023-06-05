import { ReactNode, useCallback, useEffect } from 'react';
import './style.scss';

type ModalType = {
  children: ReactNode;
  title: string;
  handleCloseModal?: () => void;
  canBeClosedOutside?: boolean;
  canBeClosedEsc?: boolean;
  hasCrossButton?: boolean;
};

const Modal = ({
  title,
  handleCloseModal,
  canBeClosedOutside,
  canBeClosedEsc,
  hasCrossButton,
  children,
}: ModalType) => {
  const stopPropagationEvent = (evt: React.SyntheticEvent) => {
    evt.stopPropagation();
  };

  const closeModalOutside = () => {
    if (canBeClosedOutside) {
      return handleCloseModal?.();
    }
  };

  const handelEscKey = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        handleCloseModal?.();
      }
    },
    [handleCloseModal]
  );

  useEffect(() => {
    document.addEventListener('keyup', handelEscKey, false);

    return () => {
      document.removeEventListener('keyup', handelEscKey, false);
    };
  }, [handleCloseModal]);

  return (
    <div onClick={closeModalOutside} className="modal">
      <div onClick={stopPropagationEvent} className="modal__wrapper">
        {title && <h3 className="modal__title">{title}</h3>}
        {hasCrossButton && (
          <button onClick={handleCloseModal} className="modal__close-button">
            x
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
