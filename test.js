var info_array = [
    {
        id:1,
        name:'kamal',
        email:'kamal@gmail.com',
        pass:1234,
        city:'lucknow',
        role:'admin'
    },
    {
        id:2,
        name:'sumit',
        email:'sumit@gmail.com',
        pass:1234,
        city:'lucknow',
        role:'user'
    },
    {
        id:3,
        name:'isha',
        email:'isha@gmail.com',
        pass:1234,
        city:'lucknow',
        role:'user'
    }
]
var countemail =0;
var countpass =0;

$(document).ready(function(){
    // alert("ready");
    $('input[type=button]').on('click',message);
    $(document).on('click','.delete',delete_user);
});

function delete_user(){
    // alert('delete');
    $(this).closest('tr').remove();
}

function user(value){
    var msg = 'welcome:'+ value;
    $('#res').html(msg);
}


function Admin(value){
    var msg = 'welcome:'+ value;
    msg += '<br>';
    text = '<table>';
    for(var i=0;i<info_array.length;i++){
        text += '<tr>';
        text += '<td>'+info_array[i].id+'</td>';
        text += '<td>'+info_array[i].name+'</td>';
        text += '<td>'+info_array[i].email+'</td>';
        text += '<td>'+info_array[i].pass+'</td>';
        text += '<td>'+info_array[i].city+'</td>';
        text += '<td>'+info_array[i].role+'</td>';
        text += '<td><a href="#" class = "delete">delete</a></td>';
        text += '</tr>';
    }
    text += '</table>';
    $('#res').html(msg);
    $('#table_res').html(text);
}

function message(){
    // alert("message");
    var user_email = $('input[type=text]').val();
    // alert(name);
    var user_pass = $('input[type=password]').val();
    // alert(pass);
    for(var i=0;i<info_array.length;i++){
        if(info_array[i].email== user_email){
        // alert('email');
        var countemail =1;
        if(info_array[i].pass== user_pass){
            var countpass = 1;
            // alert('pass');
            if(info_array[i].role == 'user')
            // alert('user');
            user(user_email);
            else Admin(user_email);
        }
        }
    }
    if(!countemail)
    alert("incorrect email");
    if(countemail){
        if(!countpass)
       alert("incorrect password");
    }
    if(!countpass)
    alert("incorrect password");
}