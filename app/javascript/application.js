// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "jquery";

jQuery('#new_bill').on('click', function(event) {
  var rowCount = jQuery('#employees tbody tr').length > 0;
  if (!rowCount) {
    event.preventDefault();
    alert('No employees available. Please add employees.');
  }
});

  