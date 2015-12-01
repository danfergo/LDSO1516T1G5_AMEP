angular.module('amep-contacts', ['amep-model']).
config(function ($stateProvider) {
  $stateProvider
  .state('contacts', {
    parent: 'loo',
    url: 'contacts',
    controller: 'contactController',
    templateUrl: 'components/contact/contacts.html'
  });
});
