import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen ? (
        <>
          <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur ">
            <div className="relative z-50 m-auto min-h-[200px] min-w-[80%] bg-white p-4 rounded-lg">
              <div className="flex justify-end">
                <AiOutlineClose className="self-end text-2xl " onClick={onClose} />
              </div>
              {children}
            </div>
          </div>
        </>
      ) : null}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
