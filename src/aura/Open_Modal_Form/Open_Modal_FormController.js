/**
 * Created by ctuser on 27.11.2018.
 */
({

    openNewAccountModal: function (component, event, helper) {
        var sObjectType = 'Account';
        var fields = ['Name', 'Phone', 'Website', 'ParentId'];
        helper.showSObjectEditModal(component, sObjectType, fields, null, component.get('v.columns'));
    },

    handleSubmit: function(component, event, helper) {
        console.log(JSON.parse(JSON.stringify(event.getParam('object'))));
    },

    handleCancel: function(component, event, helper) {

    }

})