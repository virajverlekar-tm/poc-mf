import UserDetails from './html/user-details.html';
import InsuranceDetails from './html/insurance-details.html';
import InsuranceDetailsPdp from './html/insurance-details-pdp.html';

let response;
if (__DEV__ === true) {
	response = {"user-details": UserDetails, "insurance-details": InsuranceDetails, "insurance-details-pdp": InsuranceDetailsPdp}
} else {
	response = {"user-details": { uri: 'file:///android_asset/react-native-poc-mf/html/user-details.html' }, "insurance-details": { uri: 'file:///android_asset/react-native-poc-mf/html/insurance-details.html' }, "insurance-details-pdp": { uri: 'file:///android_asset/react-native-poc-mf/html/insurance-details-pdp.html' }}
}

export default response