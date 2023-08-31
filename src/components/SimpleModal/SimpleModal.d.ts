interface PropsType {
    setModalOpen: (open: boolean) => void;
    contentText: string;
    modalType: number;
}
declare function ModalBasic({ setModalOpen, contentText, modalType }: PropsType): import("react/jsx-runtime").JSX.Element;
export default ModalBasic;
