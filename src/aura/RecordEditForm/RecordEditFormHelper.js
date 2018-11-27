/**
 * Created by ctuser on 14.11.2018.
 */
({

    throwEvent: function (component, event, helper, eventName) {
        event.preventDefault();
        var evt = component.getEvent(eventName);
        var evtObj = {
            id: component.get('v.id')
        }
        if (eventName == 'onSubmit') {
            debugger
            var obj = {};
            var sObjectType = component.get('v.sObjectType');
            var fields = event.getParam("fields");
            obj.attributes = {
                type: sObjectType
            };
            for (var s in fields) {
                obj[s] = fields[s];
            }
            if (component.get('v.recordTypeId')) {
                obj['RecordTypeId'] = component.get('v.recordTypeId');
            }
            evtObj.object = obj
        }
        evt.setParams(evtObj)
        evt.fire();
        helper.closeModal(component);
    },

    closeModal: function (component) {
        console.log('close modal');
        var modal = component.find('overlayLib');
        if (Array.isArray(modal)) {
            modal[0].notifyClose();
        } else {
            modal.notifyClose();
        }
    },

})