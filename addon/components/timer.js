import Component from '@ember/component';
import layout from '../templates/components/timer';

import { later, once } from '@ember/runloop';
import { computed } from '@ember/object';

import moment from 'moment';


export default class TimerComponent extends Component {
  layout = layout

  @computed('now', 'to')
  get hasEnded () {
    return this.to - this.now <= 0 
  }

  @computed ('now','to')
  get duration () {
    if (this.hasEnded)
      return moment.duration(0)
    
    return moment.duration(this.to.diff(this.now))
  }

  @computed('duration')
  get days () {
    return Math.floor(this.duration.as('days'))
  }

  @computed('duration')
  get hours () {
    return Math.floor(this.duration.as('hours'))%24
  }

  @computed('duration')
  get minutes () {
    return Math.floor(this.duration.as('minutes'))%60
  }

  @computed('duration')
  get seconds () {
    return Math.floor(this.duration.as('seconds'))%60
  }

  constructor () {
    super(...arguments)
    this.tick()
  }

  tick () {
    if (this.hasEnded) {
      // countdown ended; call the action if available
      if (typeof this.onEnd == 'function')
        once(this.onEnd)

      //and return early
      return;
    } 

    this.set('now', moment())
    later( () => {
      this.tick()
    }, 1000)

    
  }
}

