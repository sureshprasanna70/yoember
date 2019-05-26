import Controller from '@ember/controller';
import { not, match  } from '@ember/object/computed';

export default Controller.extend({
	emailAddress: '',
	welcomeMessage: 'Coming Soon',
	isValid: match('emailAddress', /^.+@.+\..+$/),
	isDisabled: not('isValid'),
	responseMessage: '',
	actions: {
		saveInvitation() {
			let emailAddress = this.get('emailAddress');
			let newInvitation = this.store.createRecord('invitation', { email: emailAddress });
			newInvitation.save().then(response =>{
				this.set('responseMessage', `Thank you! We have just saved your email address: ${response.get('id')}`);
				this.set('emailAddress', '');
				
			});
		}
	}
});