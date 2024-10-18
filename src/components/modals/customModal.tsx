import React, { ReactNode } from "react";
import Modal from "react-native-modal";

interface Props {
  isVisible: boolean;
  animationIn?: any;
  onBackdropPress: () => void;
  style?: any;
  backdropTransitionOutTiming?: number;
  hideModalContentWhileAnimating?: boolean;
  children: ReactNode;
}

const CustomModal = ({
  isVisible,
  animationIn = "slideInUp",
  onBackdropPress,
  style = { margin: 0, bottom: 0 },
  backdropTransitionOutTiming = 0,
  hideModalContentWhileAnimating = true,
  children,
}: Props) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn={animationIn}
      onBackdropPress={onBackdropPress}
      style={style}
      backdropTransitionOutTiming={backdropTransitionOutTiming}
      hideModalContentWhileAnimating={hideModalContentWhileAnimating}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
