import Controller from '@ember/controller';
import { gte,match, and, not } from '@ember/object/computed';

export default Controller.extend({
	contactAddress: '',
	message: '',
	isLengthy: gte('message.length',5),
	isValidEmail: match('contactAddress', /^.+@.+\..+$/),
	isBothTrue: and('isLengthy','isValidEmail'),
	isActive: not('isBothTrue'),
	actions:{
		saveContact(){
			alert(`Saving of the following email address is in progress: ${this.get('contactAddress')}`);
			this.set('contactAddress', '');
			this.set('message','');
		}
	}
});
