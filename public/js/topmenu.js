/**
 * Created by Sehyeon on 2017-07-25.
 */
var email;
function signuppass(val) {
    var item = {email: val.email.value, password: val.pass.value,firstname:val.firstName.value,lastname:val.lastName.value};
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/signup",
        data: item,
        success: function (data) {
            if (data == "clear") {
                $("#reconfirmbutton").show();
                $("#reconfirmtext").html("입력하신 메일 주소로 인증 메일을 보냈습니다. 인증 확인 후 최종 회원가입 처리가 완료됩니다.");
                email=item.email;
                $('#mail_confirm').modal('toggle');
                $('#pop-up-sign').modal('toggle');
                //$("#temp_email").val(item.email);
                //location.reload();
            }
            else {
                $("#signupfail").html(data);
                $("#signupfail").css("color", "red");
                return false;
            }
        }
    });
}
function signuptemp(val) {
    var item = {email: val.email.value, id:val.id.value, firstname:val.firstName.value,lastname:val.lastName.value,provider:val.provider.value};
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/signuptemp",
        data: item,
        success: function (data) {
            if (data == "clear") {
                location.href = "/";
            }
            else {
                location.href = "/";
            }
        }
    });
}

// function iddupcheck(val) {
//     var item = {id: val.email.value};
//     $.ajax({
//         method: "POST",
//         type: "POST",
//         url: "/idcheck",
//         data: item,
//         success: function (data) {
//             if (val.email.value == "" && data == 1) {
//                 $("#idcheck").html('');
//                 checked = 1;
//             }
//             else if (data == 1) {
//                 $("#idcheck").html('사용 가능한 이메일 입니다.');
//                 $("#idcheck").css("color", "black");
//                 checked = 1;
//             } else {
//                 $("#idcheck").html('이미 가입된 이메일 입니다.');
//                 $("#idcheck").css("color", "red");
//                 checked = 0;
//             }
//         }
//     });
// }

/*function nickcheck(val) {
    var item = {id: val.nick.value};
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/nickcheck",
        data: item,
        success: function (data) {
            if (val.nick.value == "" && data == 1) {
                $("#nickcheck").html('');
                checked = 1;
            }
            else if (data == 1) {
                $("#nickcheck").html('사용 가능한 닉네임 입니다.');
                $("#nickcheck").css("color", "black");
                checked = 1;
            } else {
                $("#nickcheck").html('중복된 닉네임 입니다.');
                $("#nickcheck").css("color", "red");
                checked = 0;
            }
        }
    });
}*/
function LoginCheck(val) {
    //var snum=document.getElementsById("snum").value;
    var item = {
        email: val.email.value,
        password: val.pass.value
    };
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/login",
        data: item,
        success: function (data) {
            if (data == "clear") {
                location.reload(true);
            }
            else if(data==="이메일 에러"||data==="패스워드 에러"||data==="타사연동으로 가입된 회원입니다. 위 버튼을 이용해서 로그인해주세요")
            {
                $("#loginfail").html(data);
                $("#loginfail").css("color", "red");
            }
            else {
                $("#reconfirmtext").html("미 인증된 메일입니다. 인증 확인 후 로그인 해 주세요.");
                $("#reconfirmbutton").show();
                email=item.email;
                $('#mail_confirm').modal('toggle');
                $('#pop-up-login').modal('toggle');
            }
        }
    });
}
function SubLoginCheck(val) {
    //var snum=document.getElementsById("snum").value;
    var item = {
        email: val.email.value,
        password: val.pass.value
    };
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/login",
        data: item,
        success: function (data) {
            if (data == "clear") {
                location.replace('/seller/submit_seller');
            }
            else if(data==="이메일 에러"||data==="패스워드 에러"||data==="타사연동으로 가입된 회원입니다. 위 버튼을 이용해서 로그인해주세요")
            {
                $("#loginfail").html(data);
                $("#loginfail").css("color", "red");
            }
            else {
                $("#reconfirmtext").html("미 인증된 메일입니다. 인증 확인 후 로그인 해 주세요.");
                $("#reconfirmbutton").show();
                email=item.email;
                $('#mail_confirm').modal('toggle');
                $('#pop-up-login').modal('toggle');
            }
        }
    });
}
function LogOut() {
    var item;
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/logout",
        data: item,
        success: function (data) {
            if (data == "clear")
                location.reload();
        }
    });
}
function TempDel() {
    var item;
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/tempout"
    });
}
function submitseller() {
    location.href="/seller/submit_seller";
}
function manage() {
    location.href="/seller/manage";
}
function seller_signup() {
    location.href="/seller/sign_up";
}
function tologin(){
    $('#mail_confirm').modal('toggle');
    $('#pop-up-login').modal('toggle');
}
function reconfirm(){
    var item = {
        email: email
    };
    $.ajax({
        method: "POST",
        type: "POST",
        url: "/reconfirm",
        data: item,
        success: function (data) {
            $("#reconfirmbutton").hide();
            $("#reconfirmtext").html("입력하신 메일 주소로 새로운 인증 메일을 보냈습니다.");
            //$('#mail_confirm').modal('show');
            //$('#pop-up-login').modal('toggle');

        }
    });
}
