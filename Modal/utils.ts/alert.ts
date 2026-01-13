import { Alert } from "react-native";

interface Alertprops {
    title: string,
    message: string,
    onOk: () => void,
    onCancel: () => void
}

const showAlert = ({title, message, onOk, onCancel}:Alertprops): void => {
    Alert.alert(title, message,[
        {text: 'Cancel', onPress: onCancel},
        {text: 'Ok', onPress: onOk}
    ])
  }

export {
    showAlert
}