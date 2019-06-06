ember-timer
==============================================================================

A contextual component to show a countdown timer. Uses Moment.js


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-timer
```


Usage
------------------------------------------------------------------------------
The `timer` component expects a `to` argument which is Moment Object. 

```
<Timer @to={{countToMomentObject}} as |t|/>
    DaysLeft: {{t.days}}
    HoursLeft: {{t.hours}}
    MinutesLeft: {{t.minutes}}
    SecondsLeft: {{t.seconds}}
</Timer>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
