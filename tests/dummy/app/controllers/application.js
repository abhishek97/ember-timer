import Controller from '@ember/controller';
import moment from 'moment'

export default Controller.extend({
    time: moment().add(10, "seconds"),
    actions: {
        onEnd() {
            alert('countdown Eneded')
        }
    }
})