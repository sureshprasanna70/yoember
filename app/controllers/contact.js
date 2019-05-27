import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { gte,match, and, not } from '@ember/object/computed';


export default Controller.extend({
	responseMessage: false,
	isLengthy: gte('model.message.length',5),
	isValidEmail: match('model.email', /^.+@.+\..+$/),
	isBothTrue: and('isLengthy','isValidEmail'),
	isActive: not('isBothTrue'),
	actions:{
		saveContact(newContact){
			newContact.save().then(() => {
				this.set('responseMessage',true);
				this.set('model.email','');
				this.set('model.message','');
			});
		}
	}
});