/**
 * Created by ctuser on 14.11.2018.
 */
({

    init: function(component, event, helper) {
        var columns = component.get('v.columns');
        if (columns === 0) {
            columns = 1;
        } else if (columns > 4) {
            columns = 4;
        }
        var fields = component.get('v.fields');
        component.set('v.columns', columns);
        var height = Math.ceil(fields.length / columns) * 60;
        component.set('v.height', height);
        debugger
        var body = component.get('v.body');
    },

    closeButtonEvent: function (component, event, helper) {
        helper.throwEvent(component, event, helper, 'onCancel');
    },

    submitButtonEvent: function (component, event, helper) {
        helper.throwEvent(component, event, helper, 'onSubmit');
    },

    onLoad: function(component, event, helper) {
        component.find('spinnerContainer').set('v.loading', false);
    },



})