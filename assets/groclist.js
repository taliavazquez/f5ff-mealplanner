// JavaScript for groclist.html specific elements
document.addEventListener('DOMContentLoaded', function () {
  var elems = $('[data-target="dropdown1"]')[0];
  var instances = M.Dropdown.init(elems);
});
// VARIABLES
const grocList = $('#groc-list');
const listItem = $('.list-item');
let inputField = $('.input-field');
let textInputEl = inputField.children('type:text');
let grocItems = JSON.parse(localStorage.getItem("grocItems")) || [];
console.log(grocItems);
// WHEN THE PAGE LOADS
updateWithStoredItems();
function updateWithStoredItems() {
  if (grocItems.length > 0) {
    grocList.empty()
    grocItems.forEach(function (item) {
      addListItem(item);
    });
  } else {
    grocList.empty()
    for (let i = 1; i <= 3; i ++) {
      addListItem({isChecked: false, grocText: ''})
    }
  }
}

// BUTTON FUNCTIONS


// add a list element
function addListItem(item) {
  const listItem =
 $(`
<div class="row list-item valign-wrapper">
    <label class='col s1'>
        <input type="checkbox" ${item.isChecked ? `checked='checked'` : ``}></input>
        <span></span>
    </label>
    <input type='text' placeholder='Grocery Item' class='col s10 offset-s1' ${item.grocText ? `value='${item.grocText}'` : `value=''`}${item.isChecked ? `checked='checked'` : ``}"></input>
</div>`);

listItem.find('input[type="checkbox"]').click(function() {
  let listItemEl = $(this).parent().parent()
  console.log('Clicked ', $(this))
  console.log('Containing List Item: ', listItemEl)
  if ($(this).attr('checked') === 'checked') {
    listItemEl.find('input[type="checkbox"]').removeAttr('checked')
    listItemEl.find('input[type="text"]').removeAttr('checked')
  } else {
    listItemEl.find('input[type="checkbox"]').attr('checked', 'checked')
    listItemEl.find('input[type="text"]').attr('checked', 'checked')
  }
})
 
  $('#groc-list').append(listItem)
}


// save list changes
function saveList() {
  grocItems = []
  inputField = $(".list-item");
  inputField.each(function () {
    console.log($(this))
    let isChecked = $(this).children("input[type='text']").prop('checked');
    let grocText = $(this).children("input[type='text']").val();
    if (grocText) {
      grocItems.push({
        isChecked: isChecked, grocText: grocText,
      });
    }
  });
  console.log(grocItems)
  localStorage.setItem("grocItems", JSON.stringify(grocItems))
}
// remove checked items (and trigger save)
function clearChecks() {
  inputField = $(".list-item");
  let checkboxes = inputField.children('input[checked="checked"]');
  console.log(checkboxes.parent())
  checkboxes.parent().remove()

  // checkboxes.each(function (index, element) {
  //   $(element);
  // });
}
// $('input[type="checkbox"]').click(function(event, element) {
//   console.log($(this).prop('checked'))
//   if ($(this).prop('checked') === 'checked') {
//     $(this).removeAttr('checked')
//     $(this).parent().next().removeAttr('checked')
//   } else {
//     $(this).attr('checked', 'checked')
//     $(this).parent().next().attr('checked', 'checked')
//   }
// })